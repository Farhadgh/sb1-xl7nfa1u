const User = require('../models/User');

exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find()
      .select('telegramId points gamePoints')
      .sort({ points: -1 })
      .limit(10);
    
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};