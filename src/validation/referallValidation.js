const { body } = require('express-validator');

const referralValidation = [
  body('referrerName').notEmpty().withMessage('Referrer name is required'),
  body('referrerEmail').isEmail().withMessage('Referrer email is required and should be valid'),
  body('refereeName').notEmpty().withMessage('Referee name is required'),
  body('refereeEmail').isEmail().withMessage('Referee email is required and should be valid'),
  body('course').notEmpty().withMessage('Course is required'),
];

module.exports = { referralValidation };
