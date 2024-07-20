const prisma = require('../database/prismaClient');
const { sendReferralEmail } = require('../utils/emailhelper');

const createReferral = async (data) => {
  try {
    // Validate input data if needed

    // Save referral to the database
    const referral = await prisma.referral.create({
      data,
    });

    // Send referral email
    await sendReferralEmail(data.referrerEmail, data.refereeEmail, data.course);

    return referral;
  } catch (error) {
    console.error('Error in createReferral service:', error); // Log the error
    throw error; // Rethrow the error to be handled by the controller
  }
};

module.exports = { createReferral };
