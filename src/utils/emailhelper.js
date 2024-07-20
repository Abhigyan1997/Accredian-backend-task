const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Define the sendReferralEmail function
const sendReferralEmail = async (referrerEmail, refereeEmail, course) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: referrerEmail,
    subject: 'Referral Confirmation',
    text: `Thank you for referring ${refereeEmail} to the ${course} course!`,
  };

  try {
    // Send mail
    await transporter.sendMail(mailOptions);
    console.log('Referral email sent successfully');
  } catch (error) {
    console.error('Error sending referral email:', error);
    throw error; // Rethrow the error for further handling
  }
};

module.exports = { sendReferralEmail };
