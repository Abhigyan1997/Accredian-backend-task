const express = require('express');
const { createReferralController } = require('../controllers/referallController');

const router = express.Router();

router.post('/', createReferralController);

module.exports = router;
