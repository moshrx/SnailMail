// routes/taskRoutes.js
const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Create Task
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get Tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo').populate('dependencies');
    res.json(tasks);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Update Task
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Delete Task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.send('Task deleted');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
