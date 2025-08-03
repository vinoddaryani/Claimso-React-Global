// functions/transactions.js -- NEW FILE: Transaction, Invoicing, and Accounting

const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { getFirestore, Timestamp } = require('firebase-admin/firestore');
const { defineSecret } = require('firebase-functions/params');
const { getAuth } = require('firebase-admin/auth'); // Added missing import
const Stripe = require('stripe');
const { sendTransactionalEmail } = require('./email.js');

// --- INITIALIZATION ---
const db = getFirestore();
// Define secret at module level
const STRIPE_SECRET_KEY = defineSecret('STRIPE_SECRET_KEY');

// Note: We initialize stripe inside each function to ensure the secret is loaded.

// --- TRANSACTION FULFILLMENT ---

exports.finalizeWarrantyPurchase = onCall({
  secrets: [STRIPE_SECRET_KEY, 'EXTEND_API_KEY_US', 'ONEASSIST_API_KEY_IN', 'SERVIFY_API_KEY_IN'],
}, async (request) => {
  // This is the full, enterprise-grade version from our previous step
  const { purchaseId, plan, paymentIntentId, customerContext = {} } = request.data;
  const userId = request.auth?.uid;

  if (!userId) throw new HttpsError('unauthenticated', 'You must be logged in.');
  if (!purchaseId || !plan || !paymentIntentId) throw new HttpsError('invalid-argument', 'Missing required data for fulfillment.');

  const stripe = new Stripe(STRIPE_SECRET_KEY.value());
  const correlationId = `fulfill_${paymentIntentId}`;

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== 'succeeded') throw new HttpsError('failed-precondition', 'Payment not successful.');

    const amountPaid = paymentIntent.amount;
    const expectedAmount = Math.round(plan.price * 100);
    if (amountPaid < expectedAmount || paymentIntent.metadata.userId !== userId) {
      throw new HttpsError('internal', 'Payment verification failed. Contact support.');
    }

    // Get user information for email
    const user = await getAuth().getUser(userId);
    const customerEmail = user.email;

    const invoiceData = await createStripeInvoice(stripe, paymentIntent, plan, userId);

    // In a real system, you'd activate with the partner here.
    // const activationResult = await activatePartnerWarranty(plan);
    const mockContractUrl = `https://contracts.example.com/${plan.partnerId}/${correlationId}`;

    const purchaseRef = db.doc(`users/${userId}/purchases/${purchaseId}`);
    const newExpiryDate = new Date();
    newExpiryDate.setMonth(newExpiryDate.getMonth() + plan.durationMonths);

    await purchaseRef.update({
      extendedWarranty: {
        provider: plan.partnerName,
        planId: plan.partnerId,
        purchaseDate: Timestamp.now(),
        expiresOn: Timestamp.fromDate(newExpiryDate),
        stripePaymentId: paymentIntent.id,
        pricePaid: plan.price,
        currency: plan.currency,
        contractUrl: mockContractUrl,
        status: 'active',
      },
      warrantyExpires: Timestamp.fromDate(newExpiryDate),
    });

    await db.collection('transactions').doc(paymentIntent.id).set({
      userId, purchaseId, type: 'extended_warranty', amount: plan.price,
      currency: plan.currency, provider: plan.partnerName, status: 'completed',
      createdAt: Timestamp.now(), correlationId, invoiceUrl: invoiceData.invoiceUrl,
      evidence: {
        customerIP: customerContext.ip, userAgent: customerContext.userAgent,
        paymentIntentSnapshot: paymentIntent, planSnapshot: plan,
      },
    });

    await sendTransactionalEmail(
      customerEmail,
      'YOUR_WARRANTY_CONFIRMATION_TEMPLATE_ID', // Replace with your SendGrid Template ID
      { // This is the dynamic data for the email template
        customerName: user.displayName || 'Valued Customer',
        planName: `${plan.durationMonths}-Month Claimso Protect Plan`,
        productName: plan.productDescription || 'your item',
        providerName: plan.partnerName,
        pricePaid: `${plan.currency} ${plan.price.toFixed(2)}`,
        invoiceUrl: invoiceData.invoiceUrl,
        contractUrl: mockContractUrl,
        supportEmail: 'support@claimso.com',
      },
      { // This is the data for our internal email log
        userId: userId,
        transactionId: paymentIntent.id,
        type: 'warranty_confirmation',
      },
    );

    return { success: true, message: 'Warranty plan activated.', invoiceUrl: invoiceData.invoiceUrl };
  } catch (error) {
    console.error(`Fulfillment error for ${paymentIntentId}:`, error);
    throw new HttpsError('internal', `Failed to activate plan. Contact support with ID: ${correlationId}`);
  }
});

// --- INVOICING HELPER ---

async function createStripeInvoice(stripe, paymentIntent, plan, userId) {
  try {
    const user = await getAuth().getUser(userId);
    const customerEmail = user.email;

    const invoice = await stripe.invoices.create({
      customer_email: customerEmail,
      collection_method: 'send_invoice', // We'll send it, not charge again
      days_until_due: 0,
      description: `Protection Plan for ${plan.productDescription || 'your item'}`,
      metadata: { transactionId: paymentIntent.id, planId: plan.partnerId },
    });

    await stripe.invoiceItems.create({
      invoice: invoice.id,
      customer_email: customerEmail,
      amount: Math.round(plan.price * 100),
      currency: plan.currency.toLowerCase(),
      description: `${plan.durationMonths}-Month Claimso Protect Plan (${plan.partnerName})`,
    });

    // Note: For real tax calculation, you'd integrate Stripe Tax here.

    const finalizedInvoice = await stripe.invoices.finalizeInvoice(invoice.id);
    // Link the existing successful payment to this new invoice.
    const paidInvoice = await stripe.invoices.pay(finalizedInvoice.id, { paid_out_of_band: true });

    return { invoiceUrl: paidInvoice.hosted_invoice_url, invoicePdf: paidInvoice.invoice_pdf };
  } catch (error) {
    console.error('Stripe invoice creation failed:', error);
    throw new Error('Could not generate invoice.'); // Propagate error
  }
}

// --- ACCOUNTING EXPORT ---

exports.exportTransactionsAsCSV = onCall({
  // Add admin-only security check here in production
}, async (request) => {
  const { startDate, endDate } = request.data;
  if (!startDate || !endDate) {
    throw new HttpsError('invalid-argument', 'Start and end dates are required.');
  }

  try {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const snapshot = await db.collection('transactions')
      .where('createdAt', '>=', start)
      .where('createdAt', '<=', end)
      .orderBy('createdAt', 'desc')
      .get();

    if (snapshot.empty) {
      return { success: true, csv: 'No transactions found for this period.', count: 0 };
    }

    const records = snapshot.docs.map((doc) => {
      const data = doc.data();
      const createdAt = data.createdAt.toDate();
      return {
        transactionId: doc.id,
        date: createdAt.toISOString().split('T')[0],
        userId: data.userId,
        provider: data.provider,
        amount: data.amount,
        currency: data.currency,
        invoiceUrl: data.invoiceUrl,
      };
    });

    const csvHeader = 'Transaction ID,Date,User ID,Provider,Amount,Currency,Invoice URL\n';
    const csvRows = records.map((r) => `${r.transactionId},${r.date},${r.userId},${r.provider},${r.amount},${r.currency},${r.invoiceUrl}`).join('\n');

    return { success: true, csv: csvHeader + csvRows, count: records.length };
  } catch (error) {
    console.error('Transaction export failed:', error);
    throw new HttpsError('internal', 'Failed to export transactions.');
  }
});
