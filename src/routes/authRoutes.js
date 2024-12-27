const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { loginValidator } = require('../middleware/validators');

router.post('/admin/login', loginValidator, authController.adminLogin);

module.exports = router;