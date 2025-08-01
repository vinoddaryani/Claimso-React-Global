// src/components/ManagePurchasePopover.jsx -- NEW COMPONENT

import React, { useState, useEffect } from 'react';
import Popover from './Popover'; // We'll reuse your existing Popover wrapper
import Icon from './Icon';

const ManagePurchasePopover = ({ isOpen, onClose, onAction, anchorEl }) => {
  if (!isOpen) return null;

  // Calculate position based on the button that opened it (the anchor)
 // We use useState and useEffect to properly calculate the position after the component mounts
  const [position, setPosition] = useState({ top: 0, left: 0, opacity: 0 });

  useEffect(() => {
    if (anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 4, // 4px below the button
        left: rect.left + window.scrollX - 160, // Position it to the left of the button
        opacity: 1 // Fade it in
      });
    }
  }, [anchorEl]);
  
  // Combine the calculated position with the base styles
  const popoverStyle = anchorEl ? {
    ...position,
    position: 'fixed', // Use fixed positioning to place it relative to the viewport
    minWidth: '200px', // A slightly wider menu
    transition: 'opacity 0.1s ease-in-out',
  } : {};

  const handleAction = (actionType) => {
    onAction(actionType);
    onClose(); // Close the popover after an action is taken
  };

  const menuItems = [
    { text: 'Add/Edit Details', action: 'edit_details', icon: 'edit' },
    { text: 'Archive Purchase...', action: 'archive', icon: 'archive' }
  ];

  return (
    <Popover isOpen={isOpen} onClose={onClose} customStyles={popoverStyle}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 'var(--spacing-2) 0' }}>
        {menuItems.map(item => (
          <li key={item.action}>
            <button
              onClick={() => handleAction(item.action)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                width: '100%',
                padding: 'var(--spacing-2) var(--spacing-4)',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-3)',
                cursor: 'pointer',
              }}
              className="popover-menu-item" // Add a class for hover effects
            >
              <Icon name={item.icon} size={20} color="var(--text-secondary)" />
              <span style={{ fontSize: '14px' }}>{item.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </Popover>
  );
};

// Add a simple hover effect for better UX
const styles = document.createElement('style');
styles.innerHTML = `
  .popover-menu-item:hover {
    background-color: var(--accent-secondary);
  }
`;
document.head.appendChild(styles);

export default ManagePurchasePopover;