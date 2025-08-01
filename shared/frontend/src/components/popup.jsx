import React, { useEffect, useState } from 'react';
import ClaimCard from './ClaimCard';
import '../styles.css';
import { globalClient.db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Popup() {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const querySnapshot = await getDocs(collection(globalClient.db, "claims"));
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setClaims(items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching claims: ", error);
      }
    };

    fetchClaims();
  }, []);

  return (
    <div className="popup-container">
      <h3>Claimso Dashboard</h3>
      {loading ? <p>Loading...</p> :
        claims.length > 0 ? claims.map((claim) => (
          <ClaimCard key={claim.id} claim={claim} />
        )) : <p>No claims found</p>}
    </div>
  );
}
