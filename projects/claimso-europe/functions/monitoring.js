// functions/monitoring.js -- NEW FILE

const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { logger } = require('firebase-functions/v2');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const crypto = require('crypto');





const db = getFirestore();

// --- REAL-TIME PAYMENT MONITORING ---
// This function triggers every time a new document is created in the 'transactions' collection.
exports.monitorPaymentEvents = onDocumentCreated('transactions/{transactionId}', async (event) => {
  const transaction = event.data.data();
  const transactionId = event.params.transactionId;
  const correlationId = transaction.correlationId || crypto.randomUUID();

  logger.info(`New transaction detected: ${transactionId}. Initiating monitoring checks.`, { correlationId, structuredData: true });

  try {
    // --- Health & Analytics Data Aggregation ---
    // This is where we would update our partner_analytics and partner_health collections.
    // For this MVP, we will log that the process has started.

    const today = new Date().toISOString().split('T')[0];
    const analyticsRef = db.doc(`partner_analytics/${transaction.provider}_${today}`);

    // We use a Firestore transaction to safely increment counters.
    await db.runTransaction(async (t) => {
      const doc = await t.get(analyticsRef);
      if (!doc.exists) {
        t.set(analyticsRef, {
          partnerId: transaction.provider,
          date: today,
          totalRequests: 1,
          successfulRequests: 1,
          totalValue: transaction.amount,
          currencies: { [transaction.currency]: transaction.amount },
        });
      } else {
        t.update(analyticsRef, {
          totalRequests: FieldValue.increment(1),
          successfulRequests: FieldValue.increment(1),
          totalValue: FieldValue.increment(transaction.amount),
          [`currencies.${transaction.currency}`]: FieldValue.increment(transaction.amount),
        });
      }
    });

    logger.info(`Analytics updated for partner: ${transaction.provider}.`, { correlationId, structuredData: true });

    // --- Alerting Placeholder ---
    // In a full system, we'd check for suspicious patterns here.
    if (transaction.amount > 500) { // Example: Alert on high-value transactions
      logger.warn(`High-value transaction detected: ${transaction.currency} ${transaction.amount}`, { correlationId, structuredData: true });
      // This could trigger a Slack message or PagerDuty alert.
      // await sendSlackAlert('#finance-alerts', `High value transaction processed: ${transactionId}`);
    }
  } catch (error) {
    logger.error('Payment monitoring failed', { correlationId, transactionId, error: error.message, structuredData: true });
  }
});
