// src/components/Icon.jsx -- NEW OR UPDATED COMPONENT

import React from 'react';

/**
 * A simple, flexible Icon component that uses Google's Material Symbols.
 * @param {object} props
 * @param {string} props.name - The name of the Material Symbol (e.g., 'more_vert', 'archive').
 * @param {number} [props.size=18] - The font size of the icon.
 * @param {string} [props.color] - A specific color for the icon.
 * @param {object} [props.style] - Additional inline styles.
 */
const Icon = ({ name, size = 18, color, style = {} }) => {
  // We need to make sure the Material Symbols stylesheet is loaded.
  // We'll add it in our main HTML file in a later step.
  return (
    <span
      className="material-symbols-outlined"
      style={{
        fontSize: `${size}px`,
        color: color || 'inherit',
        cursor: 'inherit',
        ...style
      }}
    >
      {name}
    </span>
  );
};

export default Icon;