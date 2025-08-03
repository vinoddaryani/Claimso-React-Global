// src/hooks/usePurchases.js
import { useState, useEffect } from 'react';
import { globalClient } from '../services/firebase-enhanced-global.js';
import { collection, doc, query, onSnapshot, orderBy } from 'firebase/firestore';

/**
 * Custom hook to fetch and listen to a user's purchases in real-time from Firestore.
 * @param {string | null} userId - The Firebase Auth UID of the current user.
 * @returns {{ purchases: Array, isLoading: boolean, error: string | null }}
 */
const usePurchases = (userId) => {
  const [purchases, setPurchases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only proceed if userId is available (user is logged in)
    if (!userId) {
      setPurchases([]);
      setIsLoading(false);
      setError(null); // Clear any previous errors if user logs out
      return;
    }

    setIsLoading(true);
    setError(null); // Reset error state on new fetch attempt

    // Construct the path to the user's purchases subcollection
    const userDocRef = doc(globalClient.db, 'users', userId);
    const purchasesCollectionRef = collection(userDocRef, 'purchases');

    // Create a query to order purchases by purchaseDate (or any other relevant field)
    // Adjust 'purchaseDate' if your field name is different, or remove orderBy if not needed yet.
    const q = query(purchasesCollectionRef, orderBy('purchaseDate', 'desc'));

    // Set up the real-time listener
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedPurchases = snapshot.docs.map((doc) => {
          const data = doc.data();
          // Convert Firebase Timestamps to JavaScript Date objects if they exist
          if (data.purchaseDate && data.purchaseDate.toDate) {
            data.purchaseDate = data.purchaseDate.toDate();
          }
          if (data.returnEligibleUntil && data.returnEligibleUntil.toDate) {
            data.returnEligibleUntil = data.returnEligibleUntil.toDate();
          }
          if (data.protectionEnds && data.protectionEnds.toDate) {
            data.protectionEnds = data.protectionEnds.toDate();
          }
          return {
            id: doc.id, // Include the document ID, useful for updates/deletes
            ...data,
          };
        });
        setPurchases(fetchedPurchases);
        setIsLoading(false);
      },
      (err) => {
        console.error("Failed to fetch purchases:", err);
        setError("Failed to load purchases. Please try again.");
        setIsLoading(false);
      }
    );

    // Cleanup function: unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, [userId]); // Re-run effect if userId changes

  return { purchases, isLoading, error };
};

export default usePurchases;