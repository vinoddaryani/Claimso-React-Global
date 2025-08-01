// src/components/ClaimTypeChoiceModal.jsx -- Simplified for Warranty Only

import React from 'react';
import Button from './Button';
import { generateGoogleSearchLink, openExternalLink } from '../utils/helpers';

const ClaimTypeChoiceModal = ({ purchase, onClose }) => {
  const handleWarrantyClaim = () => {
    // This logic remains a targeted Google search for now.
    // We will upgrade it later to use a direct warranty_claim_url.
    const query = `${purchase.manufacturer || purchase.name} warranty claim`;
    openExternalLink(generateGoogleSearchLink(query));
    onClose();
  };

  return (
    <div className="flex-col" style={{ gap: 'var(--spacing-4)' }}>
      <h3 style={{ fontSize: '16px', fontWeight: '600', textAlign: 'center', marginTop: 0 }}>
        Ready to file a warranty claim?
      </h3>
      <p className="text-secondary" style={{ textAlign: 'center', marginTop: '-12px' }}>
        We'll take you to the right place to start the process for your "{purchase.name}".
      </p>
      <div className="flex-col" style={{ gap: 'var(--spacing-3)' }}>
        <Button onClick={handleWarrantyClaim} variant="primary" style={{width: '100%'}}>
          Proceed to Warranty Claim
        </Button>
      </div>
      <div style={{ paddingTop: 'var(--spacing-4)', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onClose} variant="secondary">Cancel</Button>
      </div>
    </div>
  );
};

export default ClaimTypeChoiceModal;