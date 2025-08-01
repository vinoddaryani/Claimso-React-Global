// src/background.js -- FINAL VERSION WITH PURCHASE ENRICHMENT

import { savePurchase, submitObservedPrice, enrichPurchaseData } from './services/firebase.js';
import { getAuth } from 'firebase/auth';

console.log("Claimso Intelligent Background Script Loaded. v3.0");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  
  // --- Handler 1: Enrich and Log a user's confirmed purchase ---
  if (message.type === "PURCHASE_CONFIRMED") {
    console.log(`BG: Received PURCHASE_CONFIRMED for ${message.purchases?.length || 0} items.`);
    (async () => {
      try {
        const user = getAuth().currentUser;
        if (!user) {
          console.warn("BG: Purchase detected, but no user is logged in.");
          return;
        }

        console.log(`BG: User ${user.uid} found. Starting enrichment process...`);

        // Use Promise.all to enrich all purchases concurrently
        const enrichmentPromises = message.purchases.map(p => enrichPurchaseData(p));
        const enrichedPurchases = await Promise.all(enrichmentPromises);

        // Filter out any purchases that failed to enrich
        const validPurchases = enrichedPurchases.filter(p => p !== null);
        
        if (validPurchases.length > 0) {
            console.log(`BG: Enrichment complete. Saving ${validPurchases.length} enriched purchases to Firestore...`);
            // Save all the now-enriched purchases to the user's vault
            await Promise.all(
                validPurchases.map(p => savePurchase(user.uid, p))
            );
            
            // Give the user a success confirmation
            chrome.action.setBadgeBackgroundColor({ color: '#28a745' });
            chrome.action.setBadgeText({ text: '✓' });
            setTimeout(() => chrome.action.setBadgeText({ text: '' }), 5000);
        } else {
            console.error("BG: All purchases failed to enrich. Nothing was saved.");
        }

      } catch (error) {
        console.error('BG: A critical error occurred during the purchase enrichment/saving process:', error);
      }
    })();
    return true;
  }
  
  // --- Handler 2: Submit passively observed price data (UNCHANGED) ---
  if (message.type === "PRICE_DATA_OBSERVED") {
    console.log(`BG: Received PRICE_DATA_OBSERVED for ${message.products?.length || 0} items.`);
    (async () => {
      try {
        await Promise.all(
          message.products.map(p => submitObservedPrice(p))
        );
      } catch (error) {
        console.error('BG: Error submitting observed price data:', error);
      }
    })();
    return true;
  }

});

chrome.runtime.onInstalled.addListener(() => {
  console.log('Claimso extension installed/updated.');
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (!changeInfo.url) return;
  
  // IMPORTANT: Replace with your actual domain
  const successUrl = 'https://YOUR_DOMAIN/success.html';
  const cancelUrl = 'https://YOUR_DOMAIN/cancel.html';

  if (changeInfo.url.startsWith(successUrl)) {
    console.log("Payment success detected!");
    await chrome.storage.local.set({ 
      paymentCompleted: true, 
      userHasWarranty: true, // You can set a general flag
      pendingPayment: null 
    });
    chrome.tabs.remove(tabId); // Auto-close the tab
  }

  if (changeInfo.url.startsWith(cancelUrl)) {
    console.log("Payment cancellation detected.");
    await chrome.storage.local.remove('pendingPayment');
    chrome.tabs.remove(tabId);
  }
});