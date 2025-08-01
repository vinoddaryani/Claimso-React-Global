// File: claimso-global/shared/frontend/src/utils/errors.js

export class PaymentError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = 'PaymentError';
    this.code = code;
    this.details = details;
  }
}