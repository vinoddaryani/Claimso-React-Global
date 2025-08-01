// src/components/ModalWrapper.jsx
import React from 'react';
import FocusTrap from 'focus-trap-react';

const ModalWrapper = ({ isOpen, onClose, children, title, customWidth = '380px', theme = 'dark' }) => {
  if (!isOpen) return null;
  const glassClass = theme === 'light' ? 'light-glass' : 'dark-glass';

  return (
    <FocusTrap active={isOpen}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}
        onClick={onClose}
      >
        <div
          className={glassClass}
          style={{ width: customWidth, maxWidth: '90vw', padding: 'var(--spacing-5)' }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          {title && (
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: 'var(--spacing-4)' }} className="text-primary">
              {title}
            </h3>
          )}
          {children}
        </div>
      </div>
    </FocusTrap>
  );
};

export default ModalWrapper;