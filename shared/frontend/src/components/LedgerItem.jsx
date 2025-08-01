// src/components/LedgerItem.jsx -- UPGRADED WITH MANAGE POPOVER

import React, { useState, useRef } from 'react';
import Icon from './Icon';
import ManagePurchasePopover from './ManagePurchasePopover';
import Button from './Button';

const TrendIcon = ({ trend }) => { /* ... No changes here ... */ };

const LedgerItem = ({ purchase, onAction }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const manageButtonRef = useRef(null); // To anchor the popover

  const getProductInitial = (name) => (name ? name.charAt(0).toUpperCase() : '?');
  const formatDate = (date) => (date ? new Date(date).toLocaleDateString('en-US', { year: '2-digit', month: 'short', day: 'numeric' }) : 'N/A');

  let priceTrend = null;
  // ... (price trend logic remains the same)

  const handleManageAction = (actionType) => {
    // We pass the action up to App.jsx, which will handle the logic
    onAction(purchase, actionType);
  };

return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: 'var(--spacing-3) 0',
      borderBottom: '1px solid var(--border-color)',
      gap: 'var(--spacing-3)'
    }}>
      {/* ... (Product initial, name, and date - no changes here) ... */}

      {/* vvvv --- THIS IS THE NEW BUTTONS SECTION --- vvvv */}
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
        {/* The "Buy Again" button is now a primary action */}
        <Button
            onClick={() => handleManageAction('buy_again')}
            variant="primary"
            disabled={!purchase.productUrl} // Disable if no URL exists
            style={{ padding: '4px 10px', fontSize: '11px', whiteSpace: 'nowrap' }}
        >
            Buy Again
        </Button>

        {/* The "Manage" Kebab Menu for secondary actions */}
        <button
          ref={manageButtonRef}
          onClick={() => setIsPopoverOpen(true)}
          style={{ background: 'none', border: 'none', padding: 'var(--spacing-2)', cursor: 'pointer', borderRadius: '50%' }}
          className="popover-menu-item"
          aria-label="Manage purchase"
        >
          <Icon name="more_vert" color="var(--text-secondary)" />
        </button>
        
        <ManagePurchasePopover
          isOpen={isPopoverOpen}
          onClose={() => setIsPopoverOpen(false)}
          onAction={handleManageAction}
          anchorEl={manageButtonRef.current}
        />
      </div>
      {/* ^^^^ --- END OF NEW BUTTONS SECTION --- ^^^^ */}
    </div>
  );
};

export default LedgerItem;