// functions/providerOnboarding.js -- NEW FILE

const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { logger } = require('firebase-functions/v2');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { defineSecret } = require('firebase-functions/params');
const Stripe = require('stripe');
const crypto = require('crypto');














































































// This function needs access to the main Firestore instance, initialized in index.js
const db = getFirestore();
// This should be initialized in index.js and passed, but for simplicity, we re-define here.
const STRIPE_SECRET_KEY = defineSecret('STRIPE_SECRET_KEY');

// --- PROVIDER REGISTRATION & KYC ---
// This function would be called from a future admin dashboard.
exports.registerWarrantyProvider = onCall({
  secrets: [STRIPE_SECRET_KEY],
  // In a real app, this would be protected to only allow admins to call it.
  // e.g., if (!request.auth.token.admin) { throw new HttpsError(...) }
}, async (request) => {
  const { companyInfo, contactInfo } = request.data;
  const correlationId = crypto.randomUUID();

  // Initialize Stripe client inside the function
  const stripeClient = new Stripe(STRIPE_SECRET_KEY.value());

  logger.info('Provider registration application started.', { correlationId, structuredData: true });

  if (!companyInfo || !contactInfo) {
    throw new HttpsError('invalid-argument', 'Company and contact information are required.');
  }

  try {
    // Step 1: Create a Stripe Connect Express account for the provider
    const stripeAccount = await stripeClient.accounts.create({
      type: 'express',
      country: companyInfo.country || 'US',
      email: contactInfo.email,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      business_profile: {
        name: companyInfo.legalName,
        url: companyInfo.website,
        product_description: 'Extended warranty and consumer protection services',
      },
      metadata: {
        onboarding_source: 'claimso_marketplace',
        correlationId: correlationId,
      },
    });

    logger.info(`Created Stripe Connect account ${stripeAccount.id}.`, { correlationId, structuredData: true });

    // Step 2: Create the provider application document in Firestore
    const providerId = `prov_${crypto.randomBytes(8).toString('hex')}`;
    const applicationRef = db.collection('provider_applications').doc(providerId);

    await applicationRef.set({
      providerId,
      status: 'pending_verification',
      submittedAt: FieldValue.serverTimestamp(),
      companyInfo,
      contactInfo,
      stripeConnect: {
        accountId: stripeAccount.id,
        onboardingComplete: false,
        payoutsEnabled: false,
      },
      riskProfile: {
        score: null, // To be calculated
        lastAssessed: null,
      },
    });

    // Step 3: Generate the onboarding link for the provider to complete their Stripe KYC
    const onboardingLink = await stripeClient.accountLinks.create({
      account: stripeAccount.id,
      refresh_url: `${process.env.FRONTEND_URL || 'https://claimso.com'}/provider/onboarding/refresh`,
      return_url: `${process.env.FRONTEND_URL || 'https://claimso.com'}/provider/onboarding/complete`,
      type: 'account_onboarding',
    });

    return {
      success: true,
      providerId,
      stripeAccountId: stripeAccount.id,
      onboardingUrl: onboardingLink.url,
      message: 'Provider application created. Please complete Stripe onboarding.',
    };
  } catch (error) {
    logger.error('Provider registration failed', { correlationId, error: error.message, structuredData: true });
    // Reverse any created state if possible (e.g., de-activate stripe account)
    throw new HttpsError('internal', 'Provider registration failed. Please contact support.');
  }
});
