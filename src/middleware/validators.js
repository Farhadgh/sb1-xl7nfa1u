const { body } = require('express-validator');

exports.loginValidator = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
];