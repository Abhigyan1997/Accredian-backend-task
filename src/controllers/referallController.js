const { createReferral } = require('../services/referalServices');

const createReferralController = async (req, res) => {
  try {
    const referral = await createReferral(req.body);
    res.status(201).json(referral);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { createReferralController };
