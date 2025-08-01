// src/components/ProtectionOfferCard.jsx -- NEW COMPONENT

import React from 'react';
import Button from './Button';
import Icon from './Icon';

const ProtectionOfferCard = ({ quote, isRecommended = false, onSelectPlan }) => {
  return (
    <div className={`offer-card ${isRecommended ? 'recommended' : ''}`}>
      {isRecommended && <div className="offer-card__badge">Recommended by Claimso</div>}
      
      <div className="offer-card__header">
        <img src={quote.partnerLogoUrl || 'placeholder.png'} alt={`${quote.partnerName} logo`} className="offer-card__logo" />
        <div className="offer-card__price-info">
          <span className="price">${quote.price.toFixed(2)}</span>
          <span className="duration">for {quote.durationMonths} months</span>
        </div>
      </div>
      
      <div className="offer-card__body">
        <ul className="coverage-list">
          {quote.coverage.map((item, index) => (
            <li key={index}><Icon name="check_circle" size={16} color="var(--status-delivered)" /> {item}</li>
          ))}
        </ul>
      </div>

      <div className="offer-card__footer">
        <p className="administered-by">Plan administered by {quote.partnerName}</p>
        <Button 
          onClick={() => onSelectPlan(quote)} // The button now calls the handler with its own quote data
          variant={isRecommended ? 'primary' : 'secondary'} 
          style={{width: '100%'}}
        >
          Select Plan & Proceed
        </Button>
      </div>
    </div>
  );
};

export default ProtectionOfferCard;