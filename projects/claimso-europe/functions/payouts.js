// functions/payouts.js -- NEW FILE: Provider Payout & Reconciliation System

const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { onSchedule } = require('firebase-functions/v2/scheduler');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { defineSecret } = require('firebase-functions/params');
const Stripe = require('stripe');
















































































// --- INITIALIZATION ---
// NOTE: We assume 'db' is initialized in the main index.js and accessible.
// For a modular approach, we get the instance again.
const db = getFirestore();
const STRIPE_SECRET_KEY = defineSecret('STRIPE_SECRET_KEY');

// --- CORE PAYOUT AUTOMATION ---

/**
 * Executes monthly provider payouts. Runs automatically on the 1st of every month.
 */
exports.executeMonthlyProviderPayouts = onSchedule({
  schedule: '0 9 1 * *', // 9 AM UTC on the 1st of every month
  timeZone: 'UTC',
  secrets: [STRIPE_SECRET_KEY],
}, async (context) => {
  const stripe = new Stripe(STRIPE_SECRET_KEY.value());
  console.log('Starting monthly provider payouts execution...');

  try {
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    console.log(`Processing payouts for period: ${lastMonth.toISOString()} to ${currentMonth.toISOString()}`);

    const transactionsSnapshot = await db.collection('transactions')
      .where('createdAt', '>=', lastMonth)
      .where('createdAt', '<', currentMonth)
      .where('status', '==', 'completed')
      .get();

    if (transactionsSnapshot.empty) {
      console.log('No transactions found for payout period. Exiting.');
      return null;
    }

    // Aggregate revenue per provider
    const providerAggregation = {};
    transactionsSnapshot.forEach((doc) => {
      const t = doc.data();
      const providerId = t.provider; // Assuming 'provider' holds the ID
      if (!providerId) return;

      if (!providerAggregation[providerId]) {
        providerAggregation[providerId] = { totalRevenue: 0, transactionCount: 0 };
      }
      providerAggregation[providerId].totalRevenue += t.amount;
      providerAggregation[providerId].transactionCount++;
    });

    const payoutResults = [];
    const failedPayouts = [];

    for (const [providerId, agg] of Object.entries(providerAggregation)) {
      try {
        const providerDoc = await db.collection('marketplace_partners').doc(providerId).get();
        if (!providerDoc.exists) throw new Error(`Provider doc ${providerId} not found.`);

        const providerData = providerDoc.data();
        const connectId = providerData.stripeConnect?.accountId;
        if (!connectId) throw new Error(`Provider ${providerId} missing Stripe Connect account ID.`);

        const commissionRate = providerData.commissionRate || 0.10; // Default 10%
        const payoutAmount = agg.totalRevenue * (1 - commissionRate);

        if (payoutAmount < (providerData.minimumPayout || 10.00)) {
          console.log(`Payout for ${providerId} below minimum threshold. Skipping.`);
          continue;
        }

        const transfer = await stripe.transfers.create({
          amount: Math.round(payoutAmount * 100), // To cents
          currency: providerData.currency || 'usd',
          destination: connectId,
          description: `Monthly payout for ${lastMonth.toLocaleString('default', { month: 'long' })} ${lastMonth.getFullYear()}`,
          metadata: { providerId, payoutPeriod: `${lastMonth.getFullYear()}-${lastMonth.getMonth() + 1}` },
        });

        // Create detailed payout record for auditing
        const payoutRef = await db.collection('payouts').add({
          providerId,
          payoutPeriod: { startDate: lastMonth, endDate: currentMonth },
          financials: { totalRevenue: agg.totalRevenue, commissionRate, netPayoutAmount: payoutAmount },
          stripe: { transferId: transfer.id },
          transactionCount: agg.transactionCount,
          status: 'completed',
          createdAt: FieldValue.serverTimestamp(),
        });

        payoutResults.push({ providerId, amount: payoutAmount, status: 'success', transferId: transfer.id });
        console.log(`✅ Payout completed for ${providerId}: $${payoutAmount.toFixed(2)}`);
      } catch (error) {
        console.error(`❌ Payout FAILED for provider ${providerId}:`, error);
        failedPayouts.push({ providerId, amount: agg.totalRevenue, error: error.message });
      }
    }

    // Create a batch summary record
    await db.collection('payoutBatches').add({
      payoutPeriod: { startDate: lastMonth, endDate: currentMonth },
      summary: { successful: payoutResults.length, failed: failedPayouts.length },
      results: { successful: payoutResults, failed: failedPayouts },
      executedAt: FieldValue.serverTimestamp(),
    });

    // Send admin notification
    await sendPayoutNotification({ successful: payoutResults.length, failed: failedPayouts.length });

    return null;
  } catch (error) {
    console.error('❌ CRITICAL ERROR in monthly payout execution:', error);
    await sendCriticalAlert('Monthly Payout Execution Failed', error.message);
    return null;
  }
});

// --- ADMIN & HELPER FUNCTIONS ---

/**
 * Allows an admin to manually retry a failed payout.
 */
exports.retryFailedPayout = onCall({
  secrets: [STRIPE_SECRET_KEY],
}, async (request) => {
  // Add admin authentication check here
  const { payoutId } = request.data;
  if (!payoutId) {
    throw new HttpsError('invalid-argument', 'Payout ID is required.');
  }

  // Implementation for retry logic
  return { success: true, message: 'Payout retry functionality - implement as needed' };
});

/**
 * Allows an admin to get a summary of a payout period.
 */
exports.getPayoutSummary = onCall(async (request) => {
  // Add admin authentication check here
  const { startDate, endDate } = request.data;
  if (!startDate || !endDate) {
    throw new HttpsError('invalid-argument', 'Start and end dates are required.');
  }

  // Implementation for payout summary
  return { success: true, message: 'Payout summary functionality - implement as needed' };
});

/**
 * Sends a summary notification to the finance/admin team.
 */
async function sendPayoutNotification(summary) {
  // Placeholder for SendGrid integration
  console.log(`Sending payout notification: ${summary.successful} succeeded, ${summary.failed} failed.`);
  // const sgMail = await initializeSendGrid();
  // await sgMail.send({ to: 'finance@claimso.com', ... });
}

/**
 * Sends a critical alert to the dev team.
 */
async function sendCriticalAlert(subject, message) {
  // Placeholder for SendGrid or PagerDuty integration
  console.error(`CRITICAL ALERT: ${subject} - ${message}`);
  // const sgMail = await initializeSendGrid();
  // await sgMail.send({ to: 'dev-alerts@claimso.com', ... });
}
