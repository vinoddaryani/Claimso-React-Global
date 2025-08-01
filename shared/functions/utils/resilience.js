// / functions/utils/resilience.js -- NEW FILE
const admin = require("firebase-admin");
const {getFirestore} = require("firebase-admin/firestore");
const {SecretManagerServiceClient} = require("@google-cloud/secret-manager");
const axios = require("axios");

// Safety check - ensure Firebase is initialized
if (!admin.apps.length) {
  throw new Error("Firebase Admin must be initialized before importing resilience.js");
}

const db = getFirestore();
const secretClient = new SecretManagerServiceClient();

// --- Resilience Class: CircuitBreaker ---
class CircuitBreaker {
  constructor(partnerName, options = {}) {
    this.partnerName = partnerName;
    this.failureThreshold = options.failureThreshold || 3;
    this.resetTimeout = options.resetTimeout || 60000; // 1 minute
    this.state = "CLOSED"; // Can be CLOSED, OPEN, HALF_OPEN
    this.failureCount = 0;
    this.nextAttempt = null;
  }

  async execute(operation) {
    if (this.state === "OPEN") {
      if (Date.now() < this.nextAttempt) {
        throw new Error(`Circuit breaker is OPEN for partner: ${this.partnerName}`);
      }
      this.state = "HALF_OPEN";
    }
    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  onSuccess() {
    this.state = "CLOSED"; this.failureCount = 0;
  }
  onFailure() {
    this.failureCount++;
    if (this.failureCount >= this.failureThreshold) {
      this.state = "OPEN";
      this.nextAttempt = Date.now() + this.resetTimeout;
      // In a real system, you'd also log an alert here
      console.warn(`Circuit breaker for ${this.partnerName} is now OPEN.`);
    }
  }
}

// --- Partner API Client with Built-in Resilience ---
class PartnerApiClient {
  constructor(partnerConfig) {
    this.partner = partnerConfig;
    this.circuitBreaker = new CircuitBreaker(partnerConfig.partnerName);
  }

  async getQuote(category, productInfo) {
    // The operation passed to the circuit breaker is our API call logic
    return this.circuitBreaker.execute(() => this._makeApiCallWithTimeout(category, productInfo));
  }

  async _makeApiCallWithTimeout(category, productInfo) {
    const {apiConfig} = this.partner;
    const timeout = apiConfig.timeoutMs || 4500; // Default to 4.5s timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const apiKey = await this._getApiKey();
      const response = await axios.post(
          `${apiConfig.baseUrl}/quote`,
          {category, productInfo, region: this.partner.region},
          {
            headers: {
              "Authorization": `Bearer ${apiKey}`,
              "Content-Type": "application/json",
              "User-Agent": "Claimso-Aggregator/1.0",
            },
            signal: controller.signal,
          },
      );
      // We normalize the data into a standard format
      return this._normalizeQuoteResponse(response.data);
    } catch (error) {
      if (error.name === "AbortError" || error.code === "ECONNABORTED") {
        throw new Error(`Timeout: API call to ${this.partner.partnerName} exceeded ${timeout}ms`);
      }
      // Re-throw other errors for the main function to catch
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async _getApiKey() {
    try {
      const secretName = this.partner.secretName;
      const [version] = await secretClient.accessSecretVersion({
        name: `projects/${process.env.GCLOUD_PROJECT}/secrets/${secretName}/versions/latest`,
      });
      return version.payload.data.toString();
    } catch (error) {
      throw new Error(`Security Alert: Failed to retrieve API key for ${this.partner.partnerName}. Check secret name and permissions.`);
    }
  }

  _normalizeQuoteResponse(rawData) {
    // This is a crucial layer to ensure all partners provide data in the same format for our UI
    return {
      partnerId: this.partner.id,
      partnerName: this.partner.partnerName,
      partnerLogoUrl: this.partner.partnerLogoUrl,
      price: parseFloat(rawData.price) || 0,
      currency: rawData.currency || "USD",
      durationMonths: parseInt(rawData.durationMonths) || 12,
      coverage: rawData.coverage || ["Standard Protection"],
      planDetailsUrl: rawData.planDetailsUrl || null,
      purchaseUrl: rawData.purchaseUrl || null,
    };
  }
}

// --- Simple Firestore-based Cache with TTL ---
class QuoteCache {
  constructor(ttlMinutes = 10) {
    this.ttl = ttlMinutes * 60 * 1000;
  }

  _getCacheKey(category, region, productInfo) {
    // Create a consistent, hashed key from the request parameters
    const keyString = `${category}|${region}|${productInfo.price}|${productInfo.brand || ""}`;
    // Using a simple hash for demonstration; a more robust hash like SHA-256 could be used.
    return Buffer.from(keyString).toString("base64");
  }

  async get(category, region, productInfo) {
    const cacheKey = this._getCacheKey(category, region, productInfo);
    const doc = await db.collection("quote_cache").doc(cacheKey).get();

    if (!doc.exists) return null; // Cache miss

    const data = doc.data();
    if (Date.now() - data.timestamp.toMillis() > this.ttl) {
      await doc.ref.delete(); // Cache expired
      return null;
    }

    return data.quotes; // Cache hit
  }

  async set(category, region, productInfo, quotes) {
    const cacheKey = this._getCacheKey(category, region, productInfo);
    await db.collection("quote_cache").doc(cacheKey).set({
      quotes,
      timestamp: new Date(),
    });
  }
}

/**
 * The core logic for fetching and aggregating quotes from partners.
 * This can be shared by multiple Cloud Functions.
 * @param {object} db - Firestore database instance
 * @param {string} category - The product category.
 * @param {string} region - The user's region.
 * @param {object} productInfo - Details about the product.
 * @return {Promise<Array>} - A promise that resolves to an array of quote objects.
 */
async function fetchAndAggregateQuotes(db, category, region, productInfo) {
  // This is the core logic from our getProtectionQuotes function
  const partnersSnapshot = await db.collection("marketplace_partners")
      .where("region", "==", region)
      .where("isActive", "==", true)
      .where("supportedCategories", "array-contains", category)
      .orderBy("priority", "asc")
      .get();

  if (partnersSnapshot.empty) {
    return []; // Return an empty array if no partners
  }

  const partners = partnersSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));

  const quotePromises = partners.map((partner) => {
    const client = new PartnerApiClient(partner);
    return client.getQuote(category, productInfo);
  });

  const results = await Promise.allSettled(quotePromises);

  const successfulQuotes = [];
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      successfulQuotes.push(result.value);
    } else {
      console.error(`Quote failed for partner ${partners[index].partnerName}:`, result.reason.message);
    }
  });

  successfulQuotes.sort((a, b) => a.price - b.price);
  return successfulQuotes;
}

module.exports = {
  PartnerApiClient,
  QuoteCache,
  fetchAndAggregateQuotes,
};
