// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { globalClient.auth, getUserData } from '../services/firebase';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/globalClient.auth';

/**
 * Custom hook to manage Firebase authentication state.
 * Provides the current user, user data from Firestore (like firstName), loading state, and a logout function.
 */
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(globalClient.auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const data = await getUserData(currentUser.uid);
        setUserData(data);
      } else {
        setUser(null);
        setUserData(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await firebaseSignOut(globalClient.auth);
      console.log('User logged out successfully.');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  const refetchUserData = async () => {
    if (user) {
      const data = await getUserData(user.uid);
      setUserData(data);
    }
  };


  return { user, userData, isLoading, logout, refetchUserData };
};

export default useAuth;