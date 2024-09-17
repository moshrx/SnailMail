const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tasksCompleted: { type: Number, default: 0 },
});

module.exports = mongoose.model('Progress', ProgressSchema);