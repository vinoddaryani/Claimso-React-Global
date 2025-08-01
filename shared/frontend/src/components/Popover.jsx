// src/components/Popover.jsx
import React, { useRef, useEffect } from 'react';

const Popover = ({ isOpen, onClose, children, theme = 'dark', customStyles = {} }) => {
  const popoverRef = useRef(null);
  const glassClass = theme === 'light' ? 'light-glass' : 'dark-glass';

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Default styles for the main user popover
  const defaultPosition = {
    position: 'fixed',
    top: '65px',
    right: 'var(--spacing-4)',
  };

  return (
    <div ref={popoverRef} className={glassClass} style={{
      ...defaultPosition, // Use default position
      ...customStyles,  // Allow custom styles to override for things like kebab menu
      zIndex: 1000,
      minWidth: '180px', // Smaller min-width for menus
      animation: 'fadeInPop 0.15s ease-out forwards',
      boxShadow: '0 4px 12px rgba(0,0,0,0.25)', // More prominent shadow for popovers
    }}>
      {children}
    </div>
  );
};

export default Popover;