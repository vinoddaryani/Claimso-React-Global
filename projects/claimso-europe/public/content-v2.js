// src/content-v2.js -- THE PASSIVE OBSERVER

console.log("Claimso Passive Observer Loaded. v1.0");

// --- DATA PARSERS (ADAPTED FROM CARTCHECK & YOURS) ---

/**
 * Parses product data from a single product detail page (PDP).
 */
function parseProductPageData() {
    // These selectors are heuristic and will work on many sites (Amazon, Shopify, etc.)
    const nameEl = document.querySelector('h1, [itemprop="name"], .product-title, .product_title');
    const priceEl = document.querySelector('.price, [itemprop="price"], .product-price, .price-container');
    
    if (nameEl && priceEl) {
        const name = nameEl.innerText.trim();
        const priceText = priceEl.innerText;
        const price = priceText ? priceText.match(/[\d.,]+/)?.[0] : null;

        if (name && price) {
            return [{ name, price, retailer: window.location.hostname }];
        }
    }
    return null;
}

/**
 * Parses product data from a search results or category page.
 */
function parseSearchPageData() {
    const itemElements = document.querySelectorAll('.product-card, .s-result-item, [data-component-type="s-search-result"]');
    if (itemElements.length === 0) return null;
    
    const products = [];
    itemElements.forEach(item => {
        const nameEl = item.querySelector('h2, .product-name, a > span[class*="title"]');
        const priceEl = item.querySelector('.price, span.a-price-whole');
        
        if (nameEl && priceEl) {
            const name = nameEl.innerText.trim();
            const priceText = priceEl.innerText;
            const price = priceText ? priceText.match(/[\d.,]+/)?.[0] : null;
            if (name && price) {
                products.push({ name, price, retailer: window.location.hostname });
            }
        }
    });
    return products.length > 0 ? products : null;
}

/**
 * Parses purchase data from a confirmation page. (Your version is great)
 */
function parsePurchaseData() {
  try {
    const itemElements = document.querySelectorAll('.order-item, .confirmation-row, [data-order-item]');
    if (itemElements.length === 0) return null;
    const purchases = [];
    itemElements.forEach(item => {
      const name = item.querySelector('.product-name, .item-title')?.textContent.trim();
      const priceText = item.querySelector('.price, .item-price')?.textContent;
      const price = priceText ? priceText.match(/[\d.,]+/)?.[0] : null;
      if (name && price) {
        purchases.push({ name, price, retailer: window.location.hostname, purchaseDate: new Date().toISOString() });
      }
    });
    return purchases.length > 0 ? purchases : null;
  } catch (error) { return null; }
}


// --- MAIN DETECTION & DISPATCH LOGIC ---

let debounceTimer;
function runDetection() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        // Priority 1: Log successful purchases.
        const purchaseData = parsePurchaseData();
        if (purchaseData) {
            console.log(`Claimso: Passively observed a PURCHASE of ${purchaseData.length} items.`);
            chrome.runtime.sendMessage({ type: "PURCHASE_CONFIRMED", purchases: purchaseData });
            // We also send this data to the central price cache.
            chrome.runtime.sendMessage({ type: "PRICE_DATA_OBSERVED", products: purchaseData });
            return; // Stop. Purchase is the most important event.
        }

        // Priority 2: Observe prices on product pages.
        const productPageData = parseProductPageData();
        if (productPageData) {
            console.log(`Claimso: Passively observed a PRODUCT PAGE. Found ${productPageData.length} item(s).`);
            chrome.runtime.sendMessage({ type: "PRICE_DATA_OBSERVED", products: productPageData });
            return;
        }
        
        // Priority 3: Observe prices on search pages.
        const searchPageData = parseSearchPageData();
        if (searchPageData) {
            console.log(`Claimso: Passively observed a SEARCH PAGE. Found ${searchPageData.length} items.`);
            chrome.runtime.sendMessage({ type: "PRICE_DATA_OBSERVED", products: searchPageData });
        }
    }, 1000); // Wait 1 second for the page to settle.
}

// Run on initial load and on dynamic changes
runDetection();
const observer = new MutationObserver(() => runDetection());
observer.observe(document.body, { childList: true, subtree: true });