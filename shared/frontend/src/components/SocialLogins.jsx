// src/components/SocialLogins.jsx
import React from 'react';
import Button from './Button'; // Reusing our Button component

/**
 * Renders social login options.
 * @param {object} props
 * @param {function} props.onGoogleLogin - Callback function for Google login.
 */
const SocialLogins = ({ onGoogleLogin }) => {
  return (
    <div className="flex-col" style={{ gap: 'var(--spacing-3)' }}>
      {/* Google Login Button */}
      <Button onClick={onGoogleLogin} variant="secondary" style={{ width: '100%' }}>
        <img src="https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_18dp.png" alt="Google logo" style={{ marginRight: 'var(--spacing-2)' }} />
        Sign in with Google
      </Button>

      {/* Add other social logins here later if needed */}
      {/* <Button variant="secondary" style={{ width: '100%' }}>
        <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook logo" style={{ marginRight: 'var(--spacing-2)', width: '18px', height: '18px' }} />
        Sign in with Facebook
      </Button> */}

      <div className="text-tertiary" style={{ fontSize: '11px', textAlign: 'center', margin: 'var(--spacing-2) 0' }}>
        or
      </div>
    </div>
  );
};

export default SocialLogins;