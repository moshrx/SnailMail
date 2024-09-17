const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['ToDo', 'In Progress', 'Completed'], default: 'ToDo' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dependencies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

module.exports = mongoose.model('Task', TaskSchema);