const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const userController = require('../controllers/userController');

router.post('/register', userController.createUser);
router.post('/referral', auth, userController.useReferralCode);
router.post('/task/complete', auth, userController.completeTask);
router.post('/game/tap', auth, userController.recordGameTap);

module.exports = router;