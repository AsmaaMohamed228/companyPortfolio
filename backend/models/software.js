const mongoose = require('mongoose');

const softwareSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  photos: [{ type: String }], // Array of file paths or URLs for photos
  videos: [{ type: String }], // Array of file paths or URLs for videos
});

const Software = mongoose.model('Software', softwareSchema);

module.exports = Software;
