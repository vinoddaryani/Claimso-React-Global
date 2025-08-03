// src/components/CheckoutModal.jsx -- FINAL, PRODUCTION-READY VERSION

import React, { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import Button from './Button';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { paymentProcessor } from '../services/payment.js';
import { getUserRegion } from '../utils/helpers.js'

const CheckoutModal = ({ isOpen, onClose, plan, purchase }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

// --- PASTE THIS NEW, CORRECTED VERSION INTO CHECKOUTMODAL.JSX ---

const handleSubmit = async (event) => {
  event.preventDefault();
  if (!stripe || !elements) {
    return;
  }
  
  setIsProcessing(true);
  setError(null);

  try {
    // Step 1: Create the Payment Intent. This part was already correct.
    const { clientSecret } = await paymentProcessor.createPaymentIntent({
      amount: plan.price,
      currency: plan.currency,
      purchaseId: purchase.id,
      planId: plan.partnerId,
      customerRegion: getUserRegion()
    });

    // Step 2: Confirm the card payment with Stripe.
    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { name: purchase.customerName || 'Valued Customer' }, // Use real data if available
      },
    });

    if (stripeError) {
      setError(stripeError.message || "An error occurred during payment.");
      setIsProcessing(false);
      return;
    }

    // Step 3: Handle the successful payment by fulfilling the purchase.
    if (paymentIntent.status === 'succeeded') {
      try {
        // THIS IS THE FIX: Call the method on our existing paymentProcessor instance.
        await paymentProcessor.finalizeWarrantyPurchase(purchase.id, plan, paymentIntent.id);
        
        // Use a more robust success notification if possible, but alert is fine for now.
        alert("Protection plan activated successfully!");
        onClose(); // Close modal on complete success

      } catch (fulfillmentError) {
        console.error("Fulfillment Error:", fulfillmentError);
        setError("Payment succeeded, but we failed to activate your plan. Please contact support.");
        // NOTE: We do NOT set isProcessing to false here, as the payment is done.
        // The user must contact support. The modal remains open to show the error.
      }
    }
  
  } catch (error) {
    // This catches errors from our backend (createPaymentIntent) or Stripe setup.
    setError(error.message || "Could not initiate payment. Please try again.");
    setIsProcessing(false);
  }
  // No 'finally' block is needed here because the processing state is handled
  // carefully within each branch of the logic.
};

// --- END OF THE REPLACEMENT BLOCK ---
  
  const cardElementOptions = {
    style: {
      base: {
        color: 'var(--text-primary)',
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        '::placeholder': {
          color: 'var(--text-tertiary)',
        },
      },
      invalid: {
        color: 'var(--accent-danger)',
        iconColor: 'var(--accent-danger)',
      },
    },
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="Secure Checkout" customWidth="400px">
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="plan-summary" style={{textAlign: 'center', marginBottom: 'var(--spacing-4)'}}>
          <h4 style={{margin: 0}}>Protection for "{purchase.name}"</h4>
          <p style={{color: 'var(--text-secondary)', marginTop: 'var(--spacing-2)'}}>
            You are purchasing the <strong style={{color: 'var(--text-primary)'}}>{plan.partnerName}</strong> plan.
          </p>
        </div>
        <div className="card-element-container" style={{padding: 'var(--spacing-3)', border: '1px solid var(--border-color)', borderRadius: '8px'}}>
          <CardElement options={cardElementOptions} />
        </div>
        {error && <div className="payment-error" style={{color: 'var(--accent-danger)', marginTop: 'var(--spacing-3)', textAlign: 'center'}}>{error}</div>}
        <div className="checkout-actions" style={{display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-5)'}}>
          <Button type="button" onClick={onClose} variant="secondary" disabled={isProcessing}>Cancel</Button>
          <Button type="submit" disabled={!stripe || isProcessing}>
            {isProcessing ? 'Processing...' : `Pay $${plan.price.toFixed(2)}`}
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default CheckoutModal;