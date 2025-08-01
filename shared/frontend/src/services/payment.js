// File: claimso-global/shared/frontend/src/services/payment.js

import { globalClient } from './firebase-enhanced-global.js';
import { PaymentError } from '../utils/errors.js';
import { addDoc, collection } from 'firebase/firestore';
import { trace } from 'firebase/performance';

class PaymentProcessor {
    constructor() {
        this.correlationId = null;
    }

    generateCorrelationId() {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    async createCheckoutSession(planData) {
        this.correlationId = this.generateCorrelationId();
        console.log("SERVICE: Creating Stripe Checkout session...");
        
        // Data from the global client is available after it initializes.
        const { globalClient.auth, region } = globalClient;
        const userId = globalClient.auth.currentUser?.uid;
        const userEmail = globalClient.auth.currentUser?.email;

        if (!userId || !userEmail) {
            throw new PaymentError('AUTH_REQUIRED', 'User must be signed in to make a purchase.');
        }

        try {
            const createSessionFn = globalClient.getFunction('createCheckoutSession');
            const result = await createSessionFn({
                userId,
                userEmail,
                plan: planData,
                correlationId: this.correlationId
            });
            
            if (!result.data.url) {
                throw new Error("Stripe Checkout URL was not returned from the backend.");
            }
            
            return result.data; // Should contain { url, sessionId }
        } catch (error) {
            await this._logClientError('create_checkout_session', error);
            throw new Error("Could not prepare the secure checkout page. Please try again.");
        }
    }

    _handlePaymentError(error) {
        // ... (This function remains the same, using the PaymentError class)
        const errorMap = {
            'COMPLIANCE_FAILED': 'Payment cannot be processed due to regional requirements.',
            'FRAUD_DETECTED': 'This transaction has been flagged for security review.',
            'functions/invalid-argument': 'Missing required information for payment.',
            'functions/internal': 'An internal server error occurred. Please try again later.'
        };
        const userMessage = errorMap[error.code] || 'An unexpected error occurred during payment processing.';
        return new PaymentError(error.code, userMessage, { correlationId: this.correlationId, originalError: error });
    }

    async _logClientError(operation, error) {
        try {
            await addDoc(collection(globalClient.globalClient.db, 'client_errors'), {
                operation,
                error: { code: error.code, message: error.message },
                correlationId: this.correlationId,
                timestamp: new Date(),
                userAgent: navigator.userAgent,
                url: window.location.href,
                region: globalClient.region,
                projectId: globalClient.projectId
            });
        } catch (logError) {
            console.error('Failed to log client error:', logError);
        }
    }
}

// Export a single, ready-to-use instance of the processor
export const paymentProcessor = new PaymentProcessor();