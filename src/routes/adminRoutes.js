const express = require('express');
const router = express.Router();
const { adminAuth } = require('../middleware/auth');
const adminController = require('../controllers/adminController');

router.get('/tasks', adminAuth, adminController.getTasks);
router.post('/task', adminAuth, adminController.addTask);
router.put('/task/:taskId', adminAuth, adminController.updateTask);
router.delete('/task/:taskId', adminAuth, adminController.removeTask);

module.exports = router;