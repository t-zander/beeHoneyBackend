const { body } = require('express-validator/check');

exports.checkCredentials = [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({min: 6}).withMessage('Password should be at least 6 characters')
];