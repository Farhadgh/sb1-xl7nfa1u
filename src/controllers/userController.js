const User = require('../models/User');
const crypto = require('crypto');

exports.createUser = async (req, res) => {
  try {
    const { telegramId } = req.body;
    const referralCode = crypto.randomBytes(6).toString('hex');
    
    const user = new User({
      telegramId,
      referralCode
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.useReferralCode = async (req, res) => {
  try {
    const { referralCode } = req.body;
    const user = await User.findById(req.user.id);
    
    if (user.referredBy) {
      return res.status(400).json({ error: 'Already used a referral code' });
    }

    const referrer = await User.findOne({ referralCode });
    if (!referrer) {
      return res.status(404).json({ error: 'Invalid referral code' });
    }

    user.referredBy = referrer._id;
    user.points += 1000;
    await user.save();

    res.json({ message: 'Referral code applied successfully', points: user.points });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.completeTask = async (req, res) => {
  try {
    const { taskId } = req.body;
    const user = await User.findById(req.user.id);
    const task = await Task.findById(taskId);

    if (!task || !task.isActive) {
      return res.status(404).json({ error: 'Task not found or inactive' });
    }

    const alreadyCompleted = user.completedTasks.some(t => t.task.equals(taskId));
    if (alreadyCompleted) {
      return res.status(400).json({ error: 'Task already completed' });
    }

    user.points += task.points;
    user.completedTasks.push({ task: taskId });
    await user.save();

    res.json({ message: 'Task completed', points: user.points });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.recordGameTap = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.points += 1;
    user.gamePoints += 1;
    await user.save();

    res.json({ points: user.points, gamePoints: user.gamePoints });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};