// src/pages/ProtectPage.jsx -- NEW PAGE COMPONENT

import React, { useState, useEffect } from 'react';
import ProtectionOfferCard from '../components/ProtectionOfferCard'; // A new component we will create
import { getProtectionQuotes } from '../services/firebase-enhanced-global.js';

const ProtectPage = ({ purchase, onSelectPlan }) => { // It will receive the selected purchase
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!purchase) {
        setIsLoading(false);
        return;
    };

    const fetchQuotes = async () => {
      try {
        setIsLoading(true);
        setError('');
        const productInfo = {
            price: purchase.price,
            brand: purchase.manufacturer, // Assuming you have this field
            model: purchase.name,
        };
        
        // This function will call our backend aggregator
        const result = await getProtectionQuotes(purchase.category, purchase.region || 'US', productInfo);

        if (result.quotes && result.quotes.length > 0) {
            // Apply our "curation" logic here!
            // For now, we'll show the top 3 cheapest.
            const curatedQuotes = result.quotes.slice(0, 3);
            setQuotes(curatedQuotes);
        }

      } catch (err) {
        setError('Could not load protection plans.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuotes();
  }, [purchase]);

  const renderContent = () => {
    if (isLoading) {
      return <div>Loading protection plans...</div>; // Replace with a nice skeleton loader later
    }
    if (error) {
      return <div className="error-message">{error}</div>;
    }
    if (quotes.length === 0) {
      return <div className="empty-message">No protection plans available for this item yet.</div>;
    }
    
    // Add a "Recommended by Claimso" badge to the first (cheapest) plan
    const recommendedQuote = quotes[0];
    const otherQuotes = quotes.slice(1);

       return (
      <div className="protection-offers-list">
        {recommendedQuote && (
          <ProtectionOfferCard 
            quote={recommendedQuote} 
            isRecommended={true} 
            // When this card is clicked, call onSelectPlan with both the original purchase and this specific quote
            onSelectPlan={() => onSelectPlan(purchase, recommendedQuote)} 
          />
        )}
        {otherQuotes.map(quote => (
          <ProtectionOfferCard 
            key={quote.partnerId} 
            quote={quote} 
            // Do the same for all other cards
            onSelectPlan={() => onSelectPlan(purchase, quote)} 
          />
        ))}
      </div>
      );
    };
  

  return (
    <div className="protect-page">
      <div className="protect-page__header">
        <h1>Protect Your Purchase</h1>
        <p>Add an extra layer of security to your "{purchase?.name || 'item'}" with a trusted plan.</p>
      </div>
      <div className="protect-page__content">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProtectPage;