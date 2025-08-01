import React, { useState } from 'react';
import '../styles/global.css'; // Ensure global.css is imported

const Accordion = ({ title, children, startOpen = false }) => {
  const [isOpen, setIsOpen] = useState(startOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const theme = typeof document !== 'undefined' ? document.body.getAttribute('data-theme') || 'dark' : 'dark';
  const glassClass = theme === 'light' ? 'light-glass' : 'dark-glass';

  return (
    // The 'accordion-pulse' class is now here. It pulses the entire div when closed.
    <div 
      className={`accordion ${glassClass} ${!isOpen ? 'accordion-pulse' : ''}`}
      style={{
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        // The border-radius of the container itself will be animated.
        borderRadius: '6px', 
      }}
    >
      <button
        // The button no longer needs the pulse class.
        className="accordion-header"
        onClick={toggleOpen}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'var(--spacing-4)',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          textTransform: 'none',
          letterSpacing: 'normal',
          minWidth: 'auto',
          borderRadius: '0', // Button has no radius, it fills the parent div.
          borderBottom: isOpen ? '1px solid var(--border-color)' : 'none',
          backgroundColor: 'transparent',
        }}
      >
        <span className="section-title" style={{ margin: 0 }}>{title}</span>
        <span style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out',
          fontSize: '18px',
          lineHeight: '1',
          color: 'var(--text-secondary)',
        }}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div style={{
          padding: 'var(--spacing-4)',
          paddingTop: 'var(--spacing-2)',
        }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;