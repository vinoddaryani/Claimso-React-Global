// src/components/Button.jsx
import React from 'react';

/**
 * A reusable Button component with primary, secondary, and danger styles, for MD3.
 * @param {object} props - Component props.
 * @param {string} props.variant - 'primary', 'secondary', or 'danger'. Defaults to 'primary'.
 * @param {function} props.onClick - The click handler function.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {string} [props.type='button'] - The button type ('submit', 'button', 'reset').
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @param {object} [props.style={}] - Inline styles.
 * @param {number} [props.elevation=0] - Material Design elevation level (0, 1, 2, 3).
 * @param {object} [props.rest] - Any other props like aria-label, etc.
 */
const Button = ({
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
  children,
  className = '',
  style = {},
  elevation = 0, // Default elevation 0
  ...rest
}) => {
  let variantClass = '';
  switch (variant) {
    case 'primary':
      variantClass = 'btn-primary';
      break;
    case 'secondary':
      variantClass = 'btn-secondary';
      break;
    case 'danger':
      variantClass = 'btn-danger';
      break;
    default:
      variantClass = 'btn-primary';
  }

  // Combine classes including elevation
  // Elevation 0 means no shadow, so we only apply elevation class if > 0
  const elevationClass = elevation > 0 ? `elevation-${elevation}` : '';
  const combinedClassName = `${variantClass} ${elevationClass} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;