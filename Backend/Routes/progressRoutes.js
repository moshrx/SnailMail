// routes/progressRoutes.js
const express = require('express');
const Progress = require('../models/Progress');
const router = express.Router();

// Create or Update Progress
router.post('/', async (req, res) => {
  try {
    const { userId, tasksCompleted } = req.body;
    const progress = await Progress.findOneAndUpdate({ userId }, { tasksCompleted }, { upsert: true, new: true });
    res.json(progress);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get Progress
router.get('/', async (req, res) => {
  try {
    const progress = await Progress.find();
    res.json(progress);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
