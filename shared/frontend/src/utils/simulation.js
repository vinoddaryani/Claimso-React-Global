// src/utils/simulation.js -- NEW FILE for testing and simulation

import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { globalClient } from '../services/firebase-enhanced-global.js';

// --- BASE MOCK DATA ---
const createBasePurchase = (overrides = {}) => {
    const user = globalClient.auth.currentUser;
    if (!user) {
        console.error("SIMULATION: No user logged in.");
        return null;
    }

    const purchaseDate = new Date();
    const returnDate = new Date();
    returnDate.setDate(purchaseDate.getDate() + 30);
    const warrantyDate = new Date();
    warrantyDate.setMonth(purchaseDate.getMonth() + 12);

    return {
        userId: user.uid,
        name: "Simulated Product",
        price: "99.99",
        retailer: "sim-mart.com",
        purchaseDate: purchaseDate,
        returnExpires: returnDate,
        warrantyExpires: warrantyDate,
        category: "electronics",
        missingInfo: [],
        lifecycleStatus: 'active',
        ...overrides
    };
};


// --- SIMULATION FUNCTIONS ---

export const simulatePriceDropPurchase = async () => {
    const base = createBasePurchase({
        name: "Simulated 4K Monitor (Price Drop)",
        postPurchaseType: "price_drop",
        originalPrice: 250.00,
        currentPrice: 199.99,
        price: "250.00"
    });
    if (!base) return;

    await addDoc(collection(globalClient.db, 'users', base.userId, 'purchases'), base);
    console.log("SIMULATION: 'Price Drop' purchase created.");
};

export const simulateWarrantyPurchase = async () => {
    const base = createBasePurchase({
        name: "Simulated Smart Watch (Warranty)",
        postPurchaseType: "warranty",
    });
    if (!base) return;
    
    await addDoc(collection(globalClient.db, 'users', base.userId, 'purchases'), base);
    console.log("SIMULATION: 'Warranty' purchase created.");
};

export const simulateMissingInfoPurchase = async () => {
    const base = createBasePurchase({
        name: "Simulated High-End Camera (Missing Info)",
        postPurchaseType: "warranty", // It will appear in the warranty pillar too
        missingInfo: [
            { field: "serialNumber", prompt: "Please enter the camera's Serial Number.", importance: "high" },
            { field: "receiptPhoto", prompt: "Upload a photo of your receipt.", importance: "medium" }
        ]
    });
    if (!base) return;

    await addDoc(collection(globalClient.db, 'users', base.userId, 'purchases'), base);
    console.log("SIMULATION: 'Missing Info' purchase created.");
};

export const simulateArchivedPurchase = async () => {
    const base = createBasePurchase({
        name: "Simulated Old Phone (Archived)",
        postPurchaseType: "archived",
        lifecycleStatus: "archived_sold"
    });
    if (!base) return;

    await addDoc(collection(globalClient.db, 'users', base.userId, 'purchases'), base);
    console.log("SIMULATION: 'Archived' purchase created.");
};