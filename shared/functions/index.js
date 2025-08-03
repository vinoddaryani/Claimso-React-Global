// functions/index.js -- COMPLETE BACKEND: ENRICHMENT ENGINE + PRICE DROP SENTINEL

// Initialize Firebase Admin FIRST (before any other imports that use Firebase)
const { initializeApp } = require('firebase-admin/app');
initializeApp();

const { onCall, onRequest, HttpsError } = require('firebase-functions/v2/https');
const { onSchedule } = require('firebase-functions/v2/scheduler');
const { getFirestore, Timestamp } = require('firebase-admin/firestore');
const logger = require('firebase-functions/logger');
const { defineSecret } = require('firebase-functions/params');
const { OAuth2Client } = require('google-auth-library');
const { google } = require('googleapis');

// Now it's safe to import your utility files that use Firebase
const { PartnerApiClient, QuoteCache } = require('./utils/resilience.js');
const stripe = require('stripe');
const STRIPE_SECRET_KEY = defineSecret('STRIPE_SECRET_KEY');
// Add this block below your existing imports at the top of functions/index.js

const { CloudTasksClient } = require('@google-cloud/tasks');
const { onTaskDispatched } = require('firebase-functions/v2/tasks');
const axios = require('axios');
const cheerio = require('cheerio');

const { fetchAndAggregateQuotes } = require('./utils/resilience.js');

// Initialize the Cloud Tasks client globally
const tasksClient = new CloudTasksClient();

// Define the secrets we stored earlier using the Firebase CLI
const GOOGLE_CLIENT_ID = defineSecret('GOOGLE_CLIENT_ID');
const GOOGLE_CLIENT_SECRET = defineSecret('GOOGLE_CLIENT_SECRET');

// This is the required redirect URI for the OAuth flow.
// It MUST be added to your GCP OAuth Client's "Authorized redirect URIs".
// Format: https://[YOUR_PROJECT_ID].firebaseapp.com/__/auth/handler
const REDIRECT_URI = 'https://claimso.firebaseapp.com/__/auth/handler';

// Initialize the Firebase Admin SDK
const db = getFirestore();

// This function is typically called right after a user registers.
exports.saveUserFirstName = onCall(async (request) => {
  const { userId, firstName } = request.data;
  if (!userId || !firstName) {
    throw new HttpsError('invalid-argument', 'User ID and first name are required.');
  }

  const userRef = db.doc(`users/${userId}`);
  await userRef.set({
    firstName: firstName,
    // vvvv --- ADD THIS NEW FIELD --- vvvv
    isCalendarSyncEnabled: false, // Default to OFF for new users
    // ^^^^ --- END OF ADDITION --- ^^^^
    createdAt: FieldValue.serverTimestamp(),
  }, { merge: true });

  return { success: true };
});

exports.updateUserSyncPreference = onCall(async (request) => {
  const userId = request.auth?.uid;
  const { isEnabled } = request.data;

  if (!userId) {
    throw new HttpsError('unauthenticated', 'You must be logged in.');
  }

  const userRef = db.doc(`users/${userId}`);
  await userRef.update({ isCalendarSyncEnabled: isEnabled });

  return { success: true };
});

// --- NEW: THE PURCHASE ENRICHMENT FUNCTION ---
exports.enrichPurchase = onCall(async (request) => {
  const rawPurchase = request.data;
  if (!rawPurchase || !rawPurchase.name || !rawPurchase.purchaseDate) {
    throw new HttpsError('i`nvalid-argument', 'A raw purchase object with name and purchaseDate is required.');
  }
  logger.info(`Starting enrichment for: "${rawPurchase.name}" from ${rawPurchase.retailer}`);

  // Step 1: Categorize the Product (using a simple keyword map for MVP)
  const category = categorizeProductName(rawPurchase.name);
  logger.info(`Categorized as: ${category}`);

  // Step 2: Look up the policy in Firestore
  const policiesRef = db.collection('policies');
  let policyQuery = await policiesRef.where('retailer', '==', rawPurchase.retailer).where('category', '==', category).get();

  // Fallback 1: If no specific policy, try a retailer-default
  if (policyQuery.empty) {
    logger.info('No specific policy found, trying retailer-default...');
    policyQuery = await policiesRef.where('retailer', '==', rawPurchase.retailer).where('category', '==', 'default').get();
  }
  // Fallback 2: If still no policy, use the global default
  if (policyQuery.empty) {
    logger.info('No retailer-default found, using global default...');
    policyQuery = await policiesRef.where('retailer', '==', 'default').where('category', '==', 'default').get();
  }

  if (policyQuery.empty) {
    logger.error('FATAL: Could not find any policy, including global default, for purchase:', rawPurchase);
    throw new HttpsError('not-found', 'No valid policy could be found for this purchase.');
  }

  const policy = policyQuery.docs[0].data();
  const policyId = policyQuery.docs[0].id; // Let's grab the ID for a clear check
  logger.info(`Found matching policy: ${policyQuery.docs[0].id}`);
  // vvvv --- INSERT THE NEW CODE BLOCK HERE --- vvvv
  // --- EPIC 3: POLICY SCRAPER TRIGGER ---
  // If we had to use the global default, it means we don't know this retailer.
  // Let's create a task to learn about it in the background.
  if (policyId === 'default_default' && rawPurchase.retailer !== 'default') {
    logger.info(`Unknown retailer "${rawPurchase.retailer}". Enqueuing a learning task.`);

    const project = process.env.GCLOUD_PROJECT;
    // This should be the location you used in the gcloud command (e.g., us-central1)
    const location = 'us-central1';
    const queue = 'policy-scraper-queue';

    const queuePath = tasksClient.queuePath(project, location, queue);

    const url = `https://${location}-${project}.cloudfunctions.net/learnNewRetailerPolicy`;

    const task = {
      httpRequest: {
        httpMethod: 'POST',
        url,
        headers: { 'Content-Type': 'application/json' },
        body: Buffer.from(JSON.stringify({ retailer: rawPurchase.retailer })).toString('base64'),
      },
    };

    try {
      await tasksClient.createTask({ parent: queuePath, task });
      logger.info(`Task created for ${rawPurchase.retailer}`);
    } catch (error) {
      // We log the error but don't stop the enrichment process.
      // The user's experience is the top priority.
      logger.error('Failed to create learning task:', error);
    }
  }
  // Step 3: Enrich the purchase data
  const purchaseDate = new Date(rawPurchase.purchaseDate);
  const returnDate = new Date(purchaseDate);
  returnDate.setDate(returnDate.getDate() + policy.defaultReturnDays);
  const warrantyDate = new Date(purchaseDate);
  warrantyDate.setMonth(warrantyDate.getMonth() + policy.defaultWarrantyMonths);

  // Step 4: Identify missing info
  const missingInfo = policy.requiredFields.filter((field) => !rawPurchase[field.field]);

  // Step 5: Construct the final enriched object
  const enrichedData = {
    name: rawPurchase.name,
    price: rawPurchase.price,
    retailer: rawPurchase.retailer,
    purchaseDate: Timestamp.fromDate(new Date(rawPurchase.purchaseDate)),
    category: category,
    policyId: policyQuery.docs[0].id,
    warrantyExpires: Timestamp.fromDate(warrantyDate),
    returnExpires: Timestamp.fromDate(returnDate),
    missingInfo: missingInfo,
    postPurchaseType: 'return_window', // Initial state for a new purchase
    originalPostPurchaseType: 'return_window',
  };

  logger.info(`Enrichment complete for "${rawPurchase.name}"`);
  return enrichedData; // Return the final object
});

function categorizeProductName(productName) {
  const name = productName.toLowerCase();
  // This map can be expanded and moved to Firestore later for more flexibility
  const keywordMap = {
    'Electronics': ['headphone', 'tv', 'laptop', 'phone', 'camera', 'speaker', 'monitor'],
    'Apparel': ['shirt', 'jeans', 'shoes', 'jacket', 'dress', 'sneaker'],
    'Home Goods': ['sofa', 'table', 'chair', 'lamp', 'desk'],
  };

  for (const category in keywordMap) {
    if (keywordMap[category].some((keyword) => name.includes(keyword))) {
      return category;
    }
  }
  return 'default'; // Fallback category
}

// --- THE PRICE DROP SENTINEL (UNCHANGED FROM YOUR VERSION) ---
exports.dailyPriceCheck = onSchedule('every day 05:00', async (event) => {
  logger.info('Starting Daily Price Drop Check for all users...');
  const startTime = Date.now();

  try {
    const usersSnapshot = await db.collection('users').get();
    if (usersSnapshot.empty) {
      logger.info('No users found. Exiting.');
      return;
    }

    let totalPurchasesChecked = 0;
    let priceDropsFound = 0;

    for (const userDoc of usersSnapshot.docs) {
      const userId = userDoc.id;

      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      const purchasesRef = db.collection('users', userId, 'purchases');
      const purchasesQuery = purchasesRef
        .where('postPurchaseType', '==', 'return_window')
        .where('purchaseDate', '>=', Timestamp.fromDate(thirtyDaysAgo));

      const purchasesSnapshot = await purchasesQuery.get();
      if (purchasesSnapshot.empty) continue;

      for (const purchaseDoc of purchasesSnapshot.docs) {
        totalPurchasesChecked++;
        const purchase = purchaseDoc.data();

        const productId = simpleHash(`${purchase.name.toLowerCase()}_${purchase.retailer}`);
        const priceRef = db.collection('daily_prices').doc(productId);
        const priceSnap = await priceRef.get();

        if (priceSnap.exists()) {
          const latestPriceData = priceSnap.data();
          const pricePaid = parseFloat(purchase.price.replace(/,/g, ''));
          const currentPrice = parseFloat(latestPriceData.price);

          if (currentPrice < pricePaid) {
            priceDropsFound++;
            logger.info(`PRICE DROP FOUND for user ${userId}, product "${purchase.name}"!`);

            await purchaseDoc.ref.update({
              postPurchaseType: 'price_drop',
              currentPrice: currentPrice,
              originalPrice: pricePaid,
            });
          }
        }
      }
    }

    const duration = (Date.now() - startTime) / 1000;
    logger.info('--- Daily Price Drop Check Complete ---');
    logger.info(`Duration: ${duration.toFixed(2)}s, Users: ${usersSnapshot.size}, Checked: ${totalPurchasesChecked}, Found: ${priceDropsFound}`);
  } catch (error) {
    logger.error('A critical error occurred during the daily price check:', error);
  }
});

// --- EPIC 2: CALENDAR SYNC FUNCTIONS ---

/**
 * Exchanges a one-time authorization code from the client for Google API tokens.
 * Stores the refresh token securely in a private user subcollection.
 */
exports.storeGoogleTokens = onCall({ secrets: [GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET] }, async (request) => {
  const { code } = request.data;
  const userId = request.auth?.uid;

  if (!userId) {
    throw new HttpsError('unauthenticated', 'You must be logged in.');
  }
  if (!code) {
    throw new HttpsError('invalid-argument', 'Authorization code is required.');
  }

  try {
    const oauth2Client = new OAuth2Client(
      GOOGLE_CLIENT_ID.value(),
      GOOGLE_CLIENT_SECRET.value(),
      REDIRECT_URI,
    );

    const { tokens } = await oauth2Client.getToken(code);
    logger.info(`Successfully retrieved tokens for user ${userId}`);

    // Securely store the refresh token. Access tokens are short-lived.
    // We will only store the refresh token, which is the long-term key.
    const tokenRef = db.doc(`users/${userId}/private/google_tokens`);
    await tokenRef.set({
      refreshToken: tokens.refresh_token,
      scope: tokens.scope,
      updatedAt: Timestamp.now(),
    }, { merge: true });

    return { success: true, message: 'Tokens stored successfully.' };
  } catch (error) {
    logger.error(`Error exchanging auth code for user ${userId}:`, error);
    throw new HttpsError('internal', 'Failed to get Google API tokens.');
  }
});

/**
 * Creates calendar events for a purchase's return and warranty deadlines.
 * Reads the stored refresh token to authenticate with the Google Calendar API.
 */
exports.createCalendarEvent = onCall({ secrets: [GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET] }, async (request) => {
  const { purchaseId, purchaseName, returnDate, warrantyDate, retailer } = request.data;
  const userId = request.auth?.uid;

  if (!userId) {
    throw new HttpsError('unauthenticated', 'You must be logged in.');
  }
  if (!purchaseId || !purchaseName || !returnDate || !warrantyDate) {
    throw new HttpsError('invalid-argument', 'Missing required purchase data.');
  }

  // Step 1: Retrieve the user's stored refresh token
  const tokenRef = db.doc(`users/${userId}/private/google_tokens`);
  const tokenSnap = await tokenRef.get();
  if (!tokenSnap.exists || !tokenSnap.data().refreshToken) {
    throw new HttpsError('failed-precondition', 'User has not synced their Google Calendar.');
  }

  // Step 2: Initialize OAuth and Calendar clients
  const oauth2Client = new OAuth2Client(
    GOOGLE_CLIENT_ID.value(),
    GOOGLE_CLIENT_SECRET.value(),
    REDIRECT_URI,
  );
  oauth2Client.setCredentials({ refresh_token: tokenSnap.data().refreshToken });

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  // Step 3: Create the two events (return and warranty)
  const eventsToCreate = [
    {
      summary: `Return deadline for "${purchaseName}"`,
      description: `Today is the last day to return your "${purchaseName}" to ${retailer}. Manage this purchase in Claimso.`,
      date: new Date(returnDate).toISOString().split('T')[0], // Format for all-day event
    },
    {
      summary: `Warranty expires for "${purchaseName}"`,
      description: `Your manufacturer warranty for "${purchaseName}" expires today. File any claims before it's too late. Manage this purchase in Claimso.`,
      date: new Date(warrantyDate).toISOString().split('T')[0], // Format for all-day event
    },
  ];

  const createdEventIds = [];

  try {
    for (const event of eventsToCreate) {
      const response = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: {
          summary: event.summary,
          description: event.description,
          start: { date: event.date },
          end: { date: event.date },
          // Add a reminder notification for the morning of the event
          reminders: {
            useDefault: false,
            overrides: [{ 'method': 'popup', 'minutes': 9 * 60 }], // 9 AM
          },
        },
      });
      createdEventIds.push(response.data.id);
      logger.info(`Created event ${response.data.id} for user ${userId}`);
    }

    // Step 4: Store the new event IDs on the purchase document
    const purchaseRef = db.doc(`users/${userId}/purchases/${purchaseId}`);
    await purchaseRef.update({
      calendarEventIds: createdEventIds,
    });

    return { success: true, eventIds: createdEventIds };
  } catch (error) {
    logger.error(`Failed to create calendar event for user ${userId}:`, error);
    throw new HttpsError('internal', 'Could not create Google Calendar event.');
  }
});

/**
 * Deletes all calendar events created by Claimso for a given user.
 * Revokes the Google API token and deletes it from Firestore.
 */
exports.deleteAllCalendarEvents = onCall({ secrets: [GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET] }, async (request) => {
  const userId = request.auth?.uid;
  if (!userId) {
    throw new HttpsError('unauthenticated', 'You must be logged in.');
  }

  // Step 1: Initialize clients and get refresh token
  const tokenRef = db.doc(`users/${userId}/private/google_tokens`);
  const tokenSnap = await tokenRef.get();
  if (!tokenSnap.exists()) {
    logger.info(`User ${userId} has no tokens to delete. Exiting.`);
    return { success: true, message: 'No events to delete.' };
  }
  const refreshToken = tokenSnap.data().refreshToken;

  const oauth2Client = new OAuth2Client(
    GOOGLE_CLIENT_ID.value(),
    GOOGLE_CLIENT_SECRET.value(),
    REDIRECT_URI,
  );
  oauth2Client.setCredentials({ refresh_token: refreshToken });
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  // Step 2: Find all event IDs across all of the user's purchases
  const purchasesRef = db.collection(`users/${userId}/purchases`);
  const purchasesSnap = await purchasesRef.where('calendarEventIds', '!=', null).get();

  const batch = db.batch();
  let eventsToDeleteCount = 0;

  purchasesSnap.forEach((doc) => {
    const purchase = doc.data();
    if (purchase.calendarEventIds && purchase.calendarEventIds.length > 0) {
      purchase.calendarEventIds.forEach(async (eventId) => {
        try {
          await calendar.events.delete({ calendarId: 'primary', eventId: eventId });
          logger.info(`Successfully deleted event ${eventId} for user ${userId}`);
          eventsToDeleteCount++;
        } catch (error) {
          // If event is already deleted, Google sends a 410 error. We can ignore it.
          if (error.code !== 410) {
            logger.warn(`Could not delete event ${eventId} for user ${userId}. It may have been deleted already.`, error);
          }
        }
      });
    }
    // Clear the array from the document
    batch.update(doc.ref, { calendarEventIds: [] });
  });

  // Commit the batch update to clear all arrays
  await batch.commit();

  // Step 3: Revoke token with Google and delete from Firestore
  try {
    await oauth2Client.revokeCredentials();
    logger.info(`Successfully revoked Google token for user ${userId}`);
  } catch (error) {
    logger.error(`Failed to revoke token for user ${userId}.`, error);
  }

  await tokenRef.delete();
  logger.info(`Deleted token document for user ${userId}.`);

  return { success: true, message: `Deleted ${eventsToDeleteCount} events.` };
});

// --- EPIC 3: AUTOMATED POLICY SCRAPER WORKER ---
const SCRAPE_CONFIG = {
  // We send a realistic user agent to avoid being blocked.
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' },
  timeout: 10000, // 10 second timeout
};

exports.learnNewRetailerPolicy = onTaskDispatched({
  // This connects our function to the queue we created.
  queue: 'policy-scraper-queue',
}, async (req) => {
  const { retailer } = req.body;
  if (!retailer) {
    logger.warn('Task received without a retailer. Exiting.');
    return;
  }
  logger.info(`Starting policy scan for new retailer: ${retailer}`);

  try {
    const url = `https://www.${retailer}/returns`; // A common pattern for return pages
    const response = await axios.get(url, SCRAPE_CONFIG);
    const $ = cheerio.load(response.data);

    // Simple MVP text search. Can be upgraded to more complex AI parsing later.
    const bodyText = $('body').text().toLowerCase();

    // Regex to find patterns like "30-day", "14 day", "returns within 60 days"
    const daysRegex = /(\d{1,3})\s*[- ]?day/g;
    let match;
    const foundDays = [];

    while ((match = daysRegex.exec(bodyText)) !== null) {
      foundDays.push(parseInt(match[1], 10));
    }

    if (foundDays.length > 0) {
      // For MVP, we'll just take the most common number found (a simple heuristic).
      const returnDays = foundDays.sort((a, b) =>
        foundDays.filter((v) => v===a).length -
                foundDays.filter((v) => v===b).length,
      ).pop();

      logger.info(`LEARNED: Found a likely return policy of ${returnDays} days for ${retailer}.`);

      const newPolicy = {
        retailer: retailer,
        category: 'default',
        defaultReturnDays: returnDays,
        defaultWarrantyMonths: 12, // Assume a 12-month warranty as a sensible default
        return_page_url: url,
        requiredFields: [], // Start with no required fields for learned policies
      };

      const policyId = `${retailer}_default`;
      await db.collection('policies').doc(policyId).set(newPolicy);
      logger.info(`SUCCESS: Saved new policy "${policyId}" to Firestore.`);
    } else {
      logger.warn(`Policy scan for ${retailer} completed, but no return days found.`);
    }
  } catch (error) {
    logger.error(`Failed to scrape or process policy for ${retailer}:`, error.message);
  }
});

// --- EPIC 4: ARCHIVE PURCHASE FUNCTION ---

/**
 * Archives a specific purchase, updating its status and deleting associated calendar events.
 */
exports.archivePurchase = onCall({ secrets: [GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET] }, async (request) => {
  const { purchaseId, reason } = request.data;
  const userId = request.auth?.uid;

  if (!userId) {
    throw new HttpsError('unauthenticated', 'You must be logged in.');
  }
  if (!purchaseId || !reason) {
    throw new HttpsError('invalid-argument', 'A purchase ID and reason are required.');
  }

  logger.info(`Archiving purchase ${purchaseId} for user ${userId}. Reason: ${reason}`);

  const purchaseRef = db.doc(`users/${userId}/purchases/${purchaseId}`);
  const purchaseSnap = await purchaseRef.get();

  if (!purchaseSnap.exists) {
    throw new HttpsError('not-found', 'The specified purchase does not exist.');
  }

  const purchase = purchaseSnap.data();

  // Step 1: Delete associated calendar events if they exist
  if (purchase.calendarEventIds && purchase.calendarEventIds.length > 0) {
    logger.info(`Deleting ${purchase.calendarEventIds.length} calendar events for this purchase.`);

    // This logic is adapted from deleteAllCalendarEvents but is more targeted.
    const tokenRef = db.doc(`users/${userId}/private/google_tokens`);
    const tokenSnap = await tokenRef.get();

    if (tokenSnap.exists() && tokenSnap.data().refreshToken) {
      const oauth2Client = new OAuth2Client(
        GOOGLE_CLIENT_ID.value(),
        GOOGLE_CLIENT_SECRET.value(),
        REDIRECT_URI,
      );
      oauth2Client.setCredentials({ refresh_token: tokenSnap.data().refreshToken });
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      for (const eventId of purchase.calendarEventIds) {
        try {
          await calendar.events.delete({ calendarId: 'primary', eventId: eventId });
          logger.info(`Successfully deleted event ${eventId}.`);
        } catch (error) {
          if (error.code !== 410) { // Ignore "Gone" errors for already-deleted events
            logger.warn(`Could not delete event ${eventId}.`, error);
          }
        }
      }
    } else {
      logger.warn(`User ${userId} has calendar events listed but no refresh token found. Cannot delete events.`);
    }
  }

  // Step 2: Update the purchase document in Firestore
  await purchaseRef.update({
    lifecycleStatus: `archived_${reason}`, // e.g., "archived_sold_gifted"
    postPurchaseType: 'archived', // A generic type to remove it from active pillars
    calendarEventIds: [], // Clear the array
  });

  logger.info(`Successfully archived purchase ${purchaseId}.`);
  return { success: true, message: 'Purchase archived.' };
});

// Add this entire function block before the "simpleHash" helper function

// --- EPIC 5: MARKETPLACE AGGREGATOR ---

// REPLACE your old getProtectionQuotes function in functions/index.js with this one.
// This should go after your archivePurchase function.

// --- EPIC 5: THE RESILIENT MARKETPLACE AGGREGATOR (ENTERPRISE VERSION) ---

// Initialize the cache globally so it persists between function invocations (warm starts)
const quoteCache = new QuoteCache(10); // 10-minute cache lifetime

exports.getProtectionQuotes = onCall({
  // V2 functions are deployed to a single region by default.
  // This should be your primary region, e.g., 'us-central1'.
  // You would create separate deployments for other regions.
  secrets: ['EXTEND_API_KEY_US', 'ONEASSIST_API_KEY_IN', 'SERVIFY_API_KEY_IN'],
}, async (request) => {
  const { category, region, productInfo, preferences = {} } = request.data;
  const userId = request.auth?.uid;

  if (!category || !region) {
    throw new HttpsError('invalid-argument', 'Product category and region are required.');
  }

  logger.info(`Quote request from user ${userId || 'guest'} for '${category}' in '${region}'.`, { structuredData: true });

  // Step 1: Check the cache first
  const cachedQuotes = await quoteCache.get(category, region, productInfo);
  if (cachedQuotes) {
    logger.info('Returning a valid response from cache.', { structuredData: true });
    return { quotes: cachedQuotes, fromCache: true };
  }

  const quotes = await fetchAndAggregateQuotes(db, category, region, productInfo);

  if (quotes.length > 0) {
    await quoteCache.set(category, region, productInfo, quotes);
  }

  logger.info('Cache miss. Fetching live quotes from partners.', { structuredData: true });

  try {
    // Step 2: Find eligible partners from our Firestore directory
    const partnersQuery = db.collection('marketplace_partners')
      .where('region', '==', region)
      .where('isActive', '==', true)
      .where('supportedCategories', 'array-contains', category)
      .orderBy('priority', 'asc');

    const partnersSnapshot = await partnersQuery.get();

    if (partnersSnapshot.empty) {
      logger.warn(`No active partners found for category '${category}' in '${region}'.`, { structuredData: true });
      return { quotes: [], metadata: { message: 'No protection plans found for this item.' } };
    }

    const partners = partnersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    // Step 3: Create API clients and prepare quote promises
    const quotePromises = partners.map((partner) => {
      const client = new PartnerApiClient(partner);
      return client.getQuote(category, productInfo);
    });

    // Step 4: Execute in parallel and gracefully handle results
    const results = await Promise.allSettled(quotePromises);

    const successfulQuotes = [];
    const failedPartners = [];

    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        successfulQuotes.push(result.value);
      } else {
        const partnerName = partners[index].partnerName;
        logger.error(`Quote failed for partner ${partnerName}:`, { error: result.reason.message, structuredData: true });
        failedPartners.push({ partner: partnerName, reason: result.reason.message });
      }
    });

    // Step 5: Sort by price and cache the successful results
    successfulQuotes.sort((a, b) => a.price - b.price);

    if (successfulQuotes.length > 0) {
      await quoteCache.set(category, region, productInfo, successfulQuotes);
    }

    logger.info(`Aggregated ${successfulQuotes.length} quotes out of ${partners.length} potential partners.`, { structuredData: true });

    return {
      quotes: successfulQuotes,
      fromCache: false,
      metadata: {
        queriedPartners: partners.length,
        successfulPartners: successfulQuotes.length,
        failedPartners: failedPartners,
      },
    };
  } catch (error) {
    logger.error('Critical error during quote aggregation:', { error: error.message, structuredData: true });
    throw new HttpsError('internal', 'Could not retrieve protection plans at this time.');
  }
});

// Add this entire function block before the "simpleHash" helper function

// --- EPIC 5: THE RESILIENT MARKETPLACE AGGREGATOR ---

exports.getProtectionQuotes = onCall({
  // V2 functions are region-specific. Ensure this is deployed in your primary region.
  // e.g., functions.region('us-central1').https.onCall(...)
  secrets: ['EXTEND_API_KEY_US', 'ONEASSIST_API_KEY_IN', 'SERVIFY_API_KEY_IN', 'STRIPE_SECRET_KEY'],
}, async (request) => {
  const { category, region, productInfo } = request.data;
  const userId = request.auth?.uid;

  if (!category || !region) {
    throw new HttpsError('invalid-argument', 'Product category and region are required.');
  }

  logger.info(`Quote request from user ${userId || 'guest'} for '${category}' in '${region}'.`);

  // Step 1: Check the cache first to avoid unnecessary API calls
  const cachedQuotes = await quoteCache.get(category, region, productInfo);
  if (cachedQuotes) {
    logger.info('Returning a valid response from cache.');
    return { quotes: cachedQuotes, fromCache: true };
  }

  logger.info('Cache miss. Fetching live quotes from partners.');

  try {
    // Step 2: Find all eligible partners from our Firestore directory
    const partnersSnapshot = await db.collection('marketplace_partners')
      .where('region', '==', region)
      .where('isActive', '==', true)
      .where('supportedCategories', 'array-contains', category)
      .orderBy('priority', 'asc')
      .get();

    if (partnersSnapshot.empty) {
      logger.warn(`No active partners found for category '${category}' in '${region}'.`);
      return { quotes: [], message: 'No protection plans found for this item.' };
    }

    const partners = partnersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    // Step 3: Create API clients and prepare quote promises
    const quotePromises = partners.map((partner) => {
      const client = new PartnerApiClient(partner);
      return client.getQuote(category, productInfo);
    });

    // Step 4: Execute in parallel and gracefully handle results
    const results = await Promise.allSettled(quotePromises);

    const successfulQuotes = [];
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        successfulQuotes.push(result.value);
      } else {
        logger.error(`Quote failed for partner ${partners[index].partnerName}:`, result.reason.message);
        // Here we would also log this failure to our partner_health collection
      }
    });

    // Step 5: Sort by price and cache the result before returning
    successfulQuotes.sort((a, b) => a.price - b.price);

    if (successfulQuotes.length > 0) {
      await quoteCache.set(category, region, productInfo, successfulQuotes);
    }

    logger.info(`Aggregated ${successfulQuotes.length} quotes out of ${partners.length} partners.`);
    return { quotes: successfulQuotes, fromCache: false };
  } catch (error) {
    logger.error('Critical error during quote aggregation:', error);
    throw new HttpsError('internal', 'Could not retrieve protection plans.');
  }
});

// Add this entire function block before the "simpleHash" helper function

// --- EPIC 5: SECURE PAYMENT PROCESSING ---

// REPLACE your old createPaymentIntent function in functions/index.js with this one.

// --- EPIC 5: SECURE & COMPLIANT PAYMENT INTENT CREATION ---

exports.createPaymentIntent = onCall({
  secrets: [STRIPE_SECRET_KEY, 'RAZORPAY_KEY_SECRET'], // Add new secrets as we integrate more processors
}, async (request) => {
  const {
    amount,
    currency,
    purchaseId,
    planId,
    customerRegion,
    correlationId,
  } = request.data;

  const userId = request.auth?.uid;

  if (!userId) {
    throw new HttpsError('unauthenticated', 'You must be logged in to make a purchase.');
  }
  if (!amount || !currency || !purchaseId || !planId || !customerRegion) {
    throw new HttpsError('invalid-argument', 'Missing required payment information.');
  }

  logger.info(`Payment intent request for user ${userId}, region ${customerRegion}.`, { correlationId, structuredData: true });

  // --- ARCHITECTURE UPGRADE: HYBRID PAYMENT ROUTER ---
  // Here we implement the "router" logic to choose the best payment processor for the region.

  if (customerRegion === 'IN') {
    // --- RAZORPAY LOGIC (Placeholder for now) ---
    // In the future, we would call the Razorpay API here.
    // const razorpayClient = new Razorpay({ key_id: '...', key_secret: '...' });
    // const order = await razorpayClient.orders.create({ amount: amount * 100, currency: 'INR' });
    logger.info(`Routing payment for user ${userId} in India through Razorpay.`, { correlationId, structuredData: true });

    // For now, we'll throw an error indicating it's not implemented yet.
    throw new HttpsError('unimplemented', 'Payments for the India region are not yet enabled.');
  } else {
    // --- STRIPE LOGIC (Default for US, UAE, and others) ---
    try {
      const stripeClient = stripe(STRIPE_SECRET_KEY.value());

      const amountInCents = Math.round(amount * 100);

      // Placeholder for real-time fraud assessment call
      // const fraudResult = await assessTransactionRisk({ ... });
      // if (fraudResult.recommendedAction === 'block') {
      //     throw new HttpsError("permission-denied", "Transaction blocked for security reasons.");
      // }

      const paymentIntent = await stripeClient.paymentIntents.create({
        amount: amountInCents,
        currency: currency.toLowerCase(),
        automatic_payment_methods: {
          enabled: true, // Let Stripe manage payment methods
        },
        metadata: {
          userId: userId,
          purchaseId: purchaseId,
          planId: planId,
          customerRegion: customerRegion,
          correlationId: correlationId,
          // fraudScore: fraudResult.score // Store the risk score
        },
      });

      logger.info(`Created Stripe PaymentIntent ${paymentIntent.id} for user ${userId}.`, { correlationId, structuredData: true });

      return {
        clientSecret: paymentIntent.client_secret,
        processor: 'stripe',
      };
    } catch (error) {
      logger.error(`Stripe PaymentIntent creation failed for user ${userId}:`, { correlationId, error: error.message, structuredData: true });
      throw new HttpsError('internal', 'Could not initiate payment. Please try again.');
    }
  }
});

// Add this entire function block before the "simpleHash" helper function

// --- EPIC 5: TRANSACTION FULFILLMENT ---

// REPLACE your old finalizeWarrantyPurchase function in functions/index.js with this one.

// --- EPIC 5: ENTERPRISE-GRADE TRANSACTION FULFILLMENT ---

exports.finalizeWarrantyPurchase = onCall({
  secrets: [STRIPE_SECRET_KEY, 'EXTEND_API_KEY_US', 'ONEASSIST_API_KEY_IN', 'SERVIFY_API_KEY_IN'], // Needs access to all secrets
}, async (request) => {
  const { purchaseId, plan, paymentIntentId, customerContext = {} } = request.data;
  const userId = request.auth?.uid;

  if (!userId) {
    throw new HttpsError('unauthenticated', 'You must be logged in.');
  }
  if (!purchaseId || !plan || !paymentIntentId) {
    throw new HttpsError('invalid-argument', 'Missing required purchase and payment information for fulfillment.');
  }

  const stripeClient = stripe(STRIPE_SECRET_KEY.value());
  const correlationId = `fulfill_${paymentIntentId}`;

  logger.info(`Fulfillment started for payment ${paymentIntentId}.`, { correlationId, structuredData: true });

  try {
    // Step 1: CRITICAL SECURITY CHECK - Verify the payment intent directly with Stripe
    const paymentIntent = await stripeClient.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== 'succeeded') {
      logger.error('Attempt to finalize a non-successful payment.', { correlationId, status: paymentIntent.status, structuredData: true });
      throw new HttpsError('failed-precondition', 'Payment has not succeeded and cannot be finalized.');
    }

    // Security & Integrity Check: Verify amounts and user
    const amountPaid = paymentIntent.amount;
    const expectedAmount = Math.round(plan.price * 100);
    if (amountPaid < expectedAmount || paymentIntent.metadata.userId !== userId) {
      logger.error(`Security check failed for ${paymentIntentId}. Amount or user mismatch.`, { correlationId, structuredData: true });
      throw new HttpsError('internal', 'Payment verification failed. Please contact support.');
    }

    logger.info(`Payment ${paymentIntentId} verified. Proceeding with fulfillment.`, { correlationId, structuredData: true });

    // Step 2: ACTIVATE the policy with the warranty partner (Placeholder)
    // This is where we would use the partner's API to officially create the contract
    // const activationResult = await activatePartnerWarranty(plan, purchaseDetails, customerContext);
    const mockContractUrl = `https://contracts.example.com/${plan.partnerId}/${correlationId}`;

    // Step 3: UPDATE our Firestore purchase document with the new warranty info
    const purchaseRef = db.doc(`users/${userId}/purchases/${purchaseId}`);
    const newExpiryDate = new Date();
    newExpiryDate.setMonth(newExpiryDate.getMonth() + plan.durationMonths);

    await purchaseRef.update({
      extendedWarranty: {
        provider: plan.partnerName,
        planId: plan.partnerId,
        purchaseDate: Timestamp.now(),
        expiresOn: Timestamp.fromDate(newExpiryDate),
        stripePaymentId: paymentIntent.id,
        pricePaid: plan.price,
        currency: plan.currency,
        contractUrl: mockContractUrl,
        status: 'active',
      },
      warrantyExpires: Timestamp.fromDate(newExpiryDate), // Update the main expiry date
    });

    logger.info(`Updated purchase doc ${purchaseId} with extended warranty.`, { correlationId, structuredData: true });

    // Step 4: CREATE a detailed transaction record for analytics and dispute evidence
    const transactionRef = db.collection('transactions').doc(paymentIntent.id);
    await transactionRef.set({
      userId,
      purchaseId,
      type: 'extended_warranty',
      amount: plan.price,
      currency: plan.currency,
      provider: plan.partnerName,
      status: 'completed',
      createdAt: Timestamp.now(),
      correlationId,
      // Evidence Collection for Dispute Management
      evidence: {
        customerIP: customerContext.ip || 'not_provided',
        userAgent: customerContext.userAgent || 'not_provided',
        paymentIntent: paymentIntent, // Store the full, verified PI object
        planSnapshot: plan, // Store a snapshot of the plan as it was sold
      },
    });

    logger.info(`Transaction record created. Fulfillment complete for ${paymentIntent.id}.`, { correlationId, structuredData: true });

    return { success: true, message: 'Warranty plan activated successfully.', contractUrl: mockContractUrl };
  } catch (error) {
    logger.error(`Critical fulfillment error for payment ${paymentIntentId}:`, { correlationId, error: error.message, structuredData: true });
    // In a real system, we would add this failed fulfillment to a retry queue.
    throw new HttpsError('internal', 'Your payment was successful, but we failed to activate your plan. Please contact support and provide this ID: ' + correlationId);
  }
});

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return 'prod_' + Math.abs(hash).toString(16);
}

// Add this block at the very end of your functions/index.js file

// --- EXPORT MODULARIZED FUNCTIONS ---
// This pattern allows us to keep our code organized in separate files.

const providerFunctions = require('./providerOnboarding.js');
const monitoringFunctions = require('./monitoring.js');
const payoutFunctions = require('./payouts.js');
const searchFunctions = require('./search.js');
const transactionFunctions = require('./transactions.js');


const Stripe = require('stripe');
const Razorpay = require('razorpay');


const { FieldValue } = require('firebase-admin/firestore');































































// Functions from our new, modular files
exports.searchProtectionPlans = searchFunctions.searchProtectionPlans;
exports.addToWishlist = searchFunctions.addToWishlist;
exports.executeMonthlyProviderPayouts = payoutFunctions.executeMonthlyProviderPayouts;
exports.retryFailedPayout = payoutFunctions.retryFailedPayout;
exports.getPayoutSummary = payoutFunctions.getPayoutSummary;
exports.finalizeWarrantyPurchase = transactionFunctions.finalizeWarrantyPurchase;
exports.exportTransactionsAsCSV = transactionFunctions.exportTransactionsAsCSV;

/**
 * Creates a Stripe Checkout session and returns the URL.
 * This is called by our React app.
 */
exports.createCheckoutSession = onCall({
  secrets: [STRIPE_SECRET_KEY],
}, async (request) => {
  const stripe = new Stripe(STRIPE_SECRET_KEY.value());
  const { userId, userEmail, plan } = request.data; // We'll pass the plan details

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: plan.currency || 'usd',
          product_data: {
            name: `Claimso Protect: ${plan.durationMonths}-Month Plan`,
            description: `For your ${plan.productDescription}`,
          },
          unit_amount: Math.round(plan.price * 100), // Price in cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://YOUR_DOMAIN/success.html?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://YOUR_DOMAIN/cancel.html',
      customer_email: userEmail,
      metadata: {
        userId: userId,
        planId: plan.partnerId,
        purchaseId: plan.purchaseId, // The original item being protected
      },
    });

    return { url: session.url, sessionId: session.id };
  } catch (error) {
    logger.error('Error creating Stripe Checkout session:', error);
    throw new HttpsError('internal', 'Could not create checkout session.');
  }
});

/**
 * A public webhook endpoint to receive payment confirmations from Stripe.
 * This is the secure source of truth for a successful payment.
 */
exports.stripeWebhook = onRequest({
  secrets: [STRIPE_SECRET_KEY],
}, async (request, response) => {
  const stripe = new Stripe(STRIPE_SECRET_KEY.value());
  const sig = request.headers['stripe-signature'];
  const endpointSecret = 'whsec_YOUR_WEBHOOK_SECRET'; // Get this from your Stripe dashboard

  let event;
  try {
    event = stripe.webhooks.constructEvent(request.rawBody, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // PAYMENT IS SUCCESSFUL!
    // This is where you run your fulfillment logic.
    const { userId, purchaseId, planId } = session.metadata;
    // Call a helper function: await fulfillWarrantyPurchase(userId, purchaseId, planId, session);
    console.log(`Fulfilling order for user ${userId} and purchase ${purchaseId}`);
  }

  response.json({ received: true });
});
