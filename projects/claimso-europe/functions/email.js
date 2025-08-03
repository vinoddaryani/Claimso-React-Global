// functions/email.js -- NEW FILE: Transactional Email Service

const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { defineSecret } = require('firebase-functions/params');

const db = getFirestore();

// --- CORE EMAIL SENDING UTILITY ---

/**
 * Sends a transactional email using SendGrid (placeholder)
 * @param {string} to - Recipient email
 * @param {string} templateId - SendGrid template ID
 * @param {object} dynamicData - Template variables
 * @param {object} logData - Data for internal logging
 */
exports.sendTransactionalEmail = async (to, templateId, dynamicData, logData) => {
  try {
    console.log(`Sending email to ${to} with template ${templateId}`);
    console.log('Dynamic data:', dynamicData);

    // Placeholder for actual SendGrid integration
    // const sgMail = require('@sendgrid/mail');















































































    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //
    // const msg = {
    //   to: to,
    //   from: 'noreply@claimso.com',
    //   templateId: templateId,
    //   dynamicTemplateData: dynamicData
    // };
    //
    // await sgMail.send(msg);

    // Log the email for tracking
    await db.collection('email_logs').add({
      to,
      templateId,
      status: 'sent', // In real implementation: "sent" | "failed"
      sentAt: FieldValue.serverTimestamp(),
      ...logData,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);

    // Log the failure
    await db.collection('email_logs').add({
      to,
      templateId,
      status: 'failed',
      error: error.message,
      sentAt: FieldValue.serverTimestamp(),
      ...logData,
    });

    throw error;
  }
};
