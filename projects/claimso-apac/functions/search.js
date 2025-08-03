// functions/search.js -- NEW FILE: Search & Discover / Wishlist Features

const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { fetchAndAggregateQuotes } = require('./utils/resilience.js');


const { FieldValue } = require('firebase-admin/firestore');

























































const db = getFirestore();

// --- PRODUCT CATEGORY DETECTION LOGIC ---
const CATEGORY_KEYWORDS = {
  electronics: ['iphone', 'samsung', 'pixel', 'laptop', 'macbook', 'ipad', 'tablet', 'phone', 'computer', 'tv', 'camera', 'headphone'],
  appliances: ['refrigerator', 'washing', 'dishwasher', 'microwave', 'oven', 'air conditioner'],
  home: ['furniture', 'mattress', 'sofa', 'chair', 'table', 'bed'],
  jewelry: ['watch', 'ring', 'necklace', 'bracelet'],
};

function detectProductCategory(productQuery) {
  const query = productQuery.toLowerCase();
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((keyword) => query.includes(keyword))) {
      return category;
    }
  }
  return 'electronics'; // Default fallback
}

function extractProductValue(productQuery) {
  const priceMatch = productQuery.match(/[$€₹£]\s*(\d+(?:,\d{3})*(?:\.\d{2})?)/);
  if (priceMatch) {
    return parseFloat(priceMatch[1].replace(/,/g, ''));
  }
  return 500; // Default estimate
}

// --- SEARCH & DISCOVER FUNCTIONS ---

/**
 * Searches for protection plans based on a user's text query.
 */
exports.searchProtectionPlans = onCall({
  // In production, you'd want rate limiting and App Check enforcement
  // enforceAppCheck: true,
}, async (request) => {
  const { productQuery, userRegion } = request.data;
  const userId = request.auth?.uid;

  if (!productQuery || typeof productQuery !== 'string') {
    throw new HttpsError('invalid-argument', 'A valid product query string is required.');
  }

  try {
    const category = detectProductCategory(productQuery);
    const productInfo = {
      price: extractProductValue(productQuery),
      description: productQuery,
    };

    // This is a function-to-function call. It calls our main aggregator.
    const quotes = await fetchAndAggregateQuotes(db, category, userRegion || 'US', productInfo);

    // Log the search for analytics (optional)
    if (userId) {
      db.collection('users').doc(userId).collection('activity').add({
        type: 'search',
        query: productQuery,
        detectedCategory: category,
        resultCount: quotes.length, // Fixed: use quotes instead of result.quotes
        timestamp: FieldValue.serverTimestamp(),
      });
    }

    return {
      success: true,
      query: productQuery,
      detectedCategory: category,
      quotes: quotes, // Fixed: use quotes instead of result.quotes
      searchMetadata: {
        timestamp: Date.now(),
        resultCount: quotes.length,
      },
    };
  } catch (error) {
    console.error('Search for protection plans failed:', error);
    if (error instanceof HttpsError) {
      throw error;
    }
    throw new HttpsError('internal', 'Could not perform search at this time.');
  }
});

/**
 * Adds a specific protection plan quote to a user's personal wishlist.
 */
exports.addToWishlist = onCall({
  // enforceAppCheck: true,
}, async (request) => {
  const { quote } = request.data;
  const userId = request.auth?.uid;

  if (!userId) {
    throw new HttpsError('unauthenticated', 'You must be logged in to create a wishlist.');
  }
  if (!quote || !quote.partnerId || !quote.price) {
    throw new HttpsError('invalid-argument', 'A valid quote object is required.');
  }

  try {
    const wishlistRef = db.collection('users').doc(userId).collection('wishlist');
    const wishlistSnapshot = await wishlistRef.get();

    if (wishlistSnapshot.size >= 50) { // Prevent abuse
      throw new HttpsError('resource-exhausted', 'Your wishlist is full.');
    }

    // Simple duplicate check
    const existingItemQuery = await wishlistRef.where('partnerId', '==', quote.partnerId).where('price', '==', quote.price).get();
    if (!existingItemQuery.empty) {
      return { success: true, message: 'Item is already in your wishlist.', existing: true };
    }

    const wishlistItem = {
      ...quote,
      addedAt: FieldValue.serverTimestamp(),
      status: 'active',
    };

    const docRef = await wishlistRef.add(wishlistItem);

    return { success: true, wishlistItemId: docRef.id, message: 'Plan added to your wishlist.' };
  } catch (error) {
    console.error('Add to wishlist failed:', error);
    if (error instanceof HttpsError) {
      throw error;
    }
    throw new HttpsError('internal', 'Could not add item to wishlist.');
  }
});
