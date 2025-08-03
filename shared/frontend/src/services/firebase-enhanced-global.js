// File: claimso-global/shared/frontend/src/services/firebase-enhanced-global.js
// The definitive, multi-region Firebase client for Project Claimso.

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, addDoc, updateDoc, getDoc } from 'firebase/firestore';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions';
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut, connectAuthEmulator } from 'firebase/auth'; // Correct Path
import { getStorage, ref, uploadBytes, getDownloadURL, connectStorageEmulator } from 'firebase/storage'; // Correct Path
import { getPerformance } from 'firebase/performance';
import { connectFirestoreEmulator } from 'firebase/firestore';


// --- ACTION REQUIRED: PASTE YOUR CONFIGS HERE ---
const firebaseConfigs = {
  us: {
    apiKey: "...", authDomain: "claimso-us.firebaseapp.com", projectId: "claimso-us", /* ... etc */
  },
  europe: {
    apiKey: "...", authDomain: "claimso-europe.firebaseapp.com", projectId: "claimso-europe", /* ... etc */
  },
  apac: {
    apiKey: "...", authDomain: "claimso-apac.firebaseapp.com", projectId: "claimso-apac", /* ... etc */
  },
};
// ------------------------------------------------

// --- THE GLOBAL CLIENT CLASS ---

let firebaseServices = null; // Singleton instance

class ClaimsoGlobalClient {
  constructor() {
    if (firebaseServices) return firebaseServices;

    const region = this.detectRegion();
    const config = firebaseConfigs[region];
    if (!config || !config.projectId) {
      console.error(`FATAL: Firebase config for region "${region}" is missing.`);
      return;
    }
    
    const app = initializeApp(config, "claimso-global-app"); // Give the app an explicit name
    
    // Initialize all required services
    this.globalClient.auth = getAuth(app);
    this.globalClient.db = getFirestore(app);
    this.functions = getFunctions(app, region); // Specify region for functions
    this.globalClient.storage = getStorage(app);
    this.globalClient.perf = getPerformance(app);
    
    // Store metadata for logging and debugging
    this.region = region;
    this.projectId = config.projectId;

    console.log(`Claimso Global Client initialized for project ${this.projectId} in region ${this.region}`);

    // Connect to emulators for local development
    if (import.meta.env.DEV) {
      this.connectToEmulators();
    }
    
    firebaseServices = this;
  }

  detectRegion() {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone.startsWith('Europe/')) return 'europe';
      if (timezone.startsWith('Asia/')) return 'apac';
    } catch (e) { console.warn("Could not determine timezone, defaulting to 'us'.", e); }
    return 'us';
  }

  connectToEmulators() {
    console.warn("DEV MODE: Connecting to local Firebase Emulators. Make sure they are running!");
    connectFirestoreEmulator(this.globalClient.db, 'localhost', 8080);
    connectFunctionsEmulator(this.functions, 'localhost', 5001);
    connectAuthEmulator(this.globalClient.auth, 'http://localhost:9099');
    connectStorageEmulator(this.globalClient.storage, 'localhost', 9199);
  }

  // Convenience method for getting a callable function
  getFunction(functionName) {
    return httpsCallable(this.functions, functionName);
  }
}

// --- SINGLETON INSTANCE ---
// All other parts of our app will import this single instance.
export const globalClient = new ClaimsoGlobalClient();


// --- REFACTORED HELPER FUNCTIONS ---
// All functions from your old file are now here, simplified to use `globalClient`.

// AUTH
export const onAuthChange = (callback) => onAuthStateChanged(globalClient.globalClient.auth, callback);
export const signOut = () => firebaseSignOut(globalClient.globalClient.auth);
export const getUserData = async (userId) => {
    const userDoc = await getDoc(doc(globalClient.globalClient.db, 'users', userId));
    return userDoc.exists() ? userDoc.data() : null;
};
export const exchangeAuthCodeForTokens = async (code) => {
    const storeTokensFn = globalClient.getFunction('storeGoogleTokens');
    return await storeTokensFn({ code });
};
export const updateUserSyncPreference = async (isEnabled) => {
    const updateUserPrefFn = globalClient.getFunction('updateUserSyncPreference');
    return await updateUserPrefFn({ isEnabled });
};


// PURCHASES & WARRANTIES
export const enrichPurchaseData = async (rawPurchase) => {
    console.log(`SERVICE: Calling 'enrichPurchase' for "${rawPurchase.name}"`);
    try {
        const enrichPurchaseFn = globalClient.getFunction('enrichPurchase');
        const result = await enrichPurchaseFn(rawPurchase);
        if (!result.data) throw new Error("Enrichment function returned no data.");
        return result.data;
    } catch (error) {
        console.error(`SERVICE: Error calling enrichPurchase:`, error);
        return null;
    }
};

export const savePurchase = async (userId, enrichedPurchaseData) => {
    try {
        const userPurchasesRef = collection(globalClient.globalClient.db, 'users', userId, 'purchases');
        const docRef = await addDoc(userPurchasesRef, enrichedPurchaseData);
        console.log(`SERVICE: Saved purchase ${docRef.id} for user ${userId}`);
    } catch (error) {
        console.error(`SERVICE: Failed to save purchase for user ${userId}:`, error);
    }
};

export const updatePurchase = async (userId, purchaseId, dataToUpdate) => {
    const purchaseRef = doc(globalClient.globalClient.db, 'users', userId, 'purchases', purchaseId);
    const updatePayload = { ...dataToUpdate, missingInfo: [] };
    await updateDoc(purchaseRef, updatePayload);
};

export const archivePurchaseInService = async (purchaseId, reason) => {
    const archiveFn = globalClient.getFunction('archivePurchase');
    return await archiveFn({ purchaseId, reason });
};


// MARKETPLACE
export const getProtectionQuotes = async (category, productInfo, userPreferences = {}) => {
    const getQuotesFn = globalClient.getFunction('getProtectionQuotes');
    const result = await getQuotesFn({ 
        category, 
        region: globalClient.region, // Automatically use the detected region
        productInfo,
        preferences: userPreferences
    });
    return {
        ...result.data,
        quotes: result.data.quotes.map(q => ({ ...q, validUntil: Date.now() + 15 * 60 * 1000 })),
    };
};

// PRICE OBSERVER
const simpleHash = (str) => { /* ... hashing logic ... */ };
export const submitObservedPrice = async (product) => {
    if (!product?.name || !product?.price || !product?.retailer) return;
    try {
        const productId = simpleHash(`${product.name.toLowerCase()}_${product.retailer}`);
        const priceRef = doc(globalClient.globalClient.db, 'daily_prices', productId);
        await setDoc(priceRef, { /* ... data ... */ }, { merge: true });
    } catch (error) {
        console.error("SERVICE: Error submitting observed price:", error);
    }
};