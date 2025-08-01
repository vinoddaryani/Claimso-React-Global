// src/components/PurchaseCard.jsx

import React from 'react';
import Button from './Button';
// import Icon from './Icon'; // Uncomment if you use the Icon component

const PurchaseCard = ({ purchase, onAction }) => {

    // vvvv PASTE YOUR COPIED LOGIC BLOCK HERE vvvv
    // (from const formatDate... down to the end of the if/else)
    const formatDate = (date) => { /* ... */ };
    const formatCurrency = (amount) => { /* ... */ };
    
    let cardBodyContent;
    let showFooterButton = false;
    let primaryButtonText = "View Details";

    if (purchase.missingInfo && purchase.missingInfo.length > 0) {
    cardBodyContent = (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <span className="text-secondary" style={{ fontSize: '12px', color: 'var(--accent-danger)' }}>Action Required</span>
        <Button
          onClick={() => onAction(purchase, 'add_missing_info')}
          variant="primary"
           style={{ 
                padding: '6px 12px', // <-- INCREASED PADDING
                fontSize: '12px', // <-- INCREASED FONT SIZE
                lineHeight: '1.2', 
                height: '30px' // <-- INCREASED HEIGHT}}
              }}
        >
          Add Info
        </Button>
      </div>
    );
  } else {
    switch (purchase.postPurchaseType) {
      case 'price_drop':
        const savings = purchase.originalPrice && purchase.currentPrice ? purchase.originalPrice - purchase.currentPrice : 0;
        cardBodyContent = (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span className="text-secondary" style={{ fontSize: '12px' }}>
              Savings: <span style={{ color: '#50E3C2', fontWeight: '700' }}>{formatCurrency(savings)}</span>
            </span>
            <Button
              onClick={() => onAction(purchase, 'price_drop')}
              variant="primary"
              style={{ 
                padding: '6px 12px', // <-- INCREASED PADDING
                fontSize: '12px', // <-- INCREASED FONT SIZE
                lineHeight: '1.2', 
                height: '30px' // <-- INCREASED HEIGHT
            }}
            >
              Claim
            </Button>
          </div>
        );
        break;
  
      case 'warranty':
const hasMissingInfo = purchase.missingInfo && purchase.missingInfo.length > 0;

      cardBodyContent = (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span className="text-secondary" style={{ fontSize: '12px' }}>
            {hasMissingInfo 
              ? "Details needed to file claim" 
              : `Warranty until ${formatDate(purchase.warrantyExpires)}`
            }
          </span>
          <Button
            onClick={() => onAction(/* ... */)}
            variant="primary"
            // vvvv --- MODIFY THIS STYLE PROP --- vvvv
            style={{ 
                padding: '6px 12px', // <-- INCREASED PADDING
                fontSize: '12px', // <-- INCREASED FONT SIZE
                lineHeight: '1.2', 
                height: '30px' // <-- INCREASED HEIGHT
            }}
          >
            {hasMissingInfo ? "Complete to Claim" : "File a Claim"}
          </Button>
        </div>
      );
      break;
  
      default:
        showFooterButton = true;
        cardBodyContent = <p className="text-tertiary" style={{ fontSize: '12px' }}>Details unavailable.</p>;
        break;
    } // <-- Make sure this closing brace for the 'switch' is present
  } 
    // ^^^^ END OF LOGIC BLOCK ^^^^


    // --- THIS IS THE MAIN RETURN STATEMENT ---
    return ( // <-- Make sure this opening parenthesis is here
       <div className="dark-glass" style={{
      width: '260px', // <-- INCREASED WIDTH from 240px
      flexShrink: 0,
      marginRight: 'var(--spacing-4)', // <-- INCREASED MARGIN from spacing-3
      display: 'flex',
      flexDirection: 'column',
    }}>
            {/* Card Header (Text Only) */}
<div style={{ padding: 'var(--spacing-4)', borderBottom: '0' }}> {/* <-- INCREASED PADDING */}
        <h4 style={{ 
            margin: '0 0 var(--spacing-2) 0', // <-- INCREASED MARGIN
            fontSize: '14px', // <-- INCREASED FONT SIZE
            lineHeight: '1.3', // <-- ADJUSTED LINE HEIGHT
            fontWeight: '600' 
        }} className="text-primary">
          {purchase.name || 'Unknown Product'}
        </h4>
        <p style={{ 
            margin: '0', 
            fontSize: '12px' // <-- INCREASED FONT SIZE
        }} className="text-secondary">
          {purchase.retailer || 'Unknown Retailer'}
        </p>
      </div>

            {/* Card Body (Action Line) */}
          <div style={{ 
          padding: 'var(--spacing-3)', // <-- INCREASED PADDING
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center' 
      }}>
        {cardBodyContent}
      </div>

            {/* Card Footer (Only for default/unknown card types) */}
            {showFooterButton && (
                <div style={{
                    padding: 'var(--spacing-2)',
                    borderTop: '1px solid var(--border-color)',
                    marginTop: 'auto',
                }}>
                    <Button onClick={() => onAction(purchase, 'view_details')} variant="primary" style={{ width: '100%' }}>
                        {primaryButtonText}
                    </Button>
                </div>
            )}
        </div>
    ); // <-- Make sure this closing parenthesis and semicolon are here

}; // <-- Make sure this closing brace and semicolon are here

export default PurchaseCard;