const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  dbName: { type: String, required: true },
  fileType: { type: String, required: true },
  path: { type: String, required: true },
  description: { type: String }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
