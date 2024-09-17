// routes/achievementRoutes.js
const express = require('express');
const Achievement = require('../models/Achievement');
const router = express.Router();

// Create Achievement
router.post('/', async (req, res) => {
  try {
    const achievement = new Achievement(req.body);
    await achievement.save();
    res.status(201).send(achievement);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get Achievements
router.get('/', async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.json(achievements);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
