// src/components/PriceDropAssistModal.jsx -- UPGRADED AND MERGED

import React from 'react';
import Button from './Button';
import { copyToClipboard, getChatLink, openExternalLink } from '../utils/helpers';

// A new, clean component to display the price drop info
const PriceDropSummary = ({ purchase }) => {
    const savings = (purchase.originalPrice && purchase.currentPrice) ? (purchase.originalPrice - purchase.currentPrice) : 0;
    const currency = purchase.currency || '$';

    if (savings <= 0) return null; // Shouldn't happen, but a good safeguard

    return (
        <div style={{ 
            padding: 'var(--spacing-3)', 
            background: 'linear-gradient(135deg, var(--accent-secondary) 0%, rgba(46, 213, 115, 0.1) 100%)',
            borderRadius: '8px', 
            textAlign: 'center', 
            marginBottom: 'var(--spacing-3)',
            border: '1px solid rgba(46, 213, 115, 0.2)'
        }}>
            <p className="text-secondary" style={{ margin: 0, fontSize: '11px', textTransform: 'uppercase' }}>
                Price Drop Identified!
            </p>
            <p style={{ margin: '4px 0', fontSize: '28px', fontWeight: '800', color: 'var(--status-delivered)'}}>
                You can save {currency}{savings.toFixed(2)}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '8px', fontSize: '12px' }}>
                <div>
                    <span className="text-tertiary">You Paid: </span>
                    <span className="text-secondary" style={{textDecoration: 'line-through'}}>{currency}{purchase.originalPrice.toFixed(2)}</span>
                </div>
                <div>
                    <span className="text-tertiary">New Price: </span>
                    <span className="text-primary" style={{fontWeight: '600'}}>{currency}{purchase.currentPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};


const PriceDropAssistModal = ({ purchase, onClose }) => {
  const savings = (purchase.originalPrice && purchase.currentPrice) ? (purchase.originalPrice - purchase.currentPrice) : 0;
  const currency = purchase.currency || '$';
  
  // The dynamically generated script is still here and fully functional
  const chatScript = `Hello, I have an order (${purchase.orderId || 'N/A'}) for "${purchase.productName || 'N/A'}" which I purchased for ${currency}${purchase.originalPrice?.toFixed(2)}. I noticed the price has now dropped to ${currency}${purchase.currentPrice?.toFixed(2)}. Can you please assist with a price adjustment refund for the difference of ${currency}${savings.toFixed(2)}? Thank you.`;

  const handleCopyScript = () => {
    copyToClipboard(chatScript).then(success => {
      alert(success ? "Script copied to clipboard!" : "Failed to copy script.");
    });
  };

  return (
    <div className="flex-col" style={{ gap: 'var(--spacing-4)', height: '100%' }}>
        
        <PriceDropSummary purchase={purchase} />

        <div className="flex-col" style={{ gap: 'var(--spacing-3)', flexGrow: 1 }}>
            <div>
                <h4 className="text-primary" style={{ fontWeight: '600', marginBottom: 'var(--spacing-2)' }}>Step 1: Open Support Chat</h4>
                <Button onClick={() => openExternalLink(getChatLink(purchase.retailer))} variant="primary" style={{width: '100%'}}>
                    Open Chat with {purchase.retailer}
                </Button>
            </div>
            <div>
                <h4 className="text-primary" style={{ fontWeight: '600', marginBottom: 'var(--spacing-2)' }}>Step 2: Copy & Paste This Script</h4>
                <textarea
                    readOnly
                    value={chatScript}
                    rows={6}
                    style={{ resize: 'none', width: '100%', fontSize: '12px' }}
                />
            </div>
        </div>
      
        <div style={{ flexShrink: 0, paddingTop: 'var(--spacing-3)', borderTop: '1px solid var(--border-color)', display: 'flex', gap: 'var(--spacing-2)' }}>
            <Button onClick={handleCopyScript} variant="secondary" style={{flex: 1}}>
                Copy Script
            </Button>
            <Button onClick={onClose} variant="primary" style={{flex: 1}}>Done</Button>
        </div>
    </div>
  );
};

export default PriceDropAssistModal;