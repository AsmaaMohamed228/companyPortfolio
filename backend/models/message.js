const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderName: { type: String, required: true },
  senderEmail: { type: String, required: true },
  msgSubject: { type: String, required: true },
  msg: { type: String, required: true }
}, { timestamps: true }); // Optional: adds createdAt and updatedAt fields

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
