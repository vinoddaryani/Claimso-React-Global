// src/main.jsx -- UPDATED

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// IMPORTANT: Replace with your actual Stripe Publishable Key
// It's safe to have this in your client-side code.
const stripePromise = loadStripe('pk_test_51RptiDIRziOr78KomqODnvUBcXPl42eu914ecZxD0j7kSujSVLCepSLLAKyqzUK4ksV8zjZsbo9DYvfebBESJ3yR00cG9ADEfN');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
);