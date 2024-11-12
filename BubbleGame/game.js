const express = require('express');
const Score = require('./Score');

const router = express.Router();

// Submit score
router.post('/submit-score', async (req, res) => {
    const { userId, score } = req.body;
    const newScore = new Score({ userId, score });
    await newScore.save();
    res.json({ message: 'Score submitted' });
});

// Get leaderboard
router.get('/leaderboard', async (req, res) => {
    const scores = await Score.find().populate('userId', 'username').sort({ score: -1 }).limit(10);
    res.json(scores);
});

module.exports = router;
