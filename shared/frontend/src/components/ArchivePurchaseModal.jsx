// src/components/ArchivePurchaseModal.jsx -- NEW COMPONENT

import React, { useState } from 'react';
import Button from './Button'; // Reusing your Button component
import ModalWrapper from './ModalWrapper'; // Reusing your ModalWrapper

const ArchivePurchaseModal = ({ isOpen, onClose, onConfirm, purchase }) => {
  const [reason, setReason] = useState('');

  const archiveReasons = [
    { key: 'returned', label: "I've returned this item." },
    { key: 'sold_gifted', label: 'I sold or gave it away.' },
    { key: 'lost_broken', label: 'It was lost or broken.' },
    { key: 'other_hide', label: 'Just hide it from my vault.' },
  ];

  const handleConfirm = () => {
    if (reason) {
      onConfirm(reason); // Pass the selected reason back to App.jsx
    }
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Archive Purchase" customWidth="380px">
      <div className="archive-modal">
        <p className="archive-modal__subtitle">
          Archiving "{purchase?.name}" will remove it from active lists and disable warranty alerts. Why are you archiving it?
        </p>
        
        <div className="archive-modal__reasons">
          {archiveReasons.map(item => (
            <button
              key={item.key}
              className={`archive-modal__reason-btn ${reason === item.key ? 'selected' : ''}`}
              onClick={() => setReason(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="archive-modal__actions">
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} variant="primary" disabled={!reason}>
            Confirm Archive
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

// Add these BEM-compliant styles to your global.css file
const styles = document.createElement('style');
styles.innerHTML = `
  .archive-modal__subtitle {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: var(--spacing-4);
    text-align: center;
  }
  .archive-modal__reasons {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }
  .archive-modal__reason-btn {
    width: 100%;
    padding: var(--spacing-3);
    text-align: left;
    background-color: var(--input-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .archive-modal__reason-btn:hover {
    border-color: var(--accent-primary);
    background-color: var(--accent-secondary);
  }
  .archive-modal__reason-btn.selected {
    border-color: var(--accent-primary);
    background-color: var(--accent-primary);
    color: #fff;
    box-shadow: 0 0 10px var(--accent-glow);
  }
  body[data-theme='light'] .archive-modal__reason-btn.selected {
      color: #fff;
  }
  .archive-modal__actions {
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing-3);
    margin-top: var(--spacing-5);
    padding-top: var(--spacing-4);
    border-top: 1px solid var(--border-color);
  }
`;
document.head.appendChild(styles);

export default ArchivePurchaseModal;