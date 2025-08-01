// src/components/PurchaseVault.jsx
import React from 'react';
import LedgerItem from './LedgerItem';

const PurchaseVault = ({ items, emptyMessage, onItemAction }) => {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto'
    }}>
      {items.length === 0 ? (
        <div className="elevation-1" style={{
          backgroundColor: 'var(--md3-surface)',
          padding: 'var(--md3-spacing-4)',
          borderRadius: '12px',
          textAlign: 'center',
          color: 'var(--md3-on-surface-variant)',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          lineHeight: '1.3',
          flexGrow: 1,
        }}>
          <p>{emptyMessage}</p>
        </div>
      ) : (
        // CORRECTED: The div containing the list now has a max-height
        <div style={{
          overflowY: 'auto', // Enable scrolling for this div
          maxHeight: '200px', // Set a max height to trigger scrolling
          paddingRight: 'var(--md3-spacing-2)', // Space for scrollbar
        }}>
          {items.map(item => (
            <LedgerItem key={item.id} purchase={item} onAction={onItemAction} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PurchaseVault;