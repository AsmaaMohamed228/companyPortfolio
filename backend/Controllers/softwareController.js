const Software = require('../models/software');

// Get all software
exports.getAllSoftware = (req, res) => {
  Software.find()
    .then(software => {
      res.json(software);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Get a single software by ID
exports.getSoftwareById = (req, res) => {
  const softwareId = req.params.id;
  Software.findById(softwareId)
    .then(software => {
      res.json(software);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Create new software
exports.createSoftware = (req, res) => {
  const softwareData = req.body;
  const newSoftware = new Software(softwareData);
  newSoftware.save()
    .then(software => {
      res.json(software);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Update software by ID
exports.updateSoftware = (req, res) => {
  const softwareId = req.params.id;
  const updatedSoftwareData = req.body;
  Software.findByIdAndUpdate(softwareId, updatedSoftwareData, { new: true })
    .then(software => {
      res.json(software);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Delete software by ID
exports.deleteSoftware = (req, res) => {
  const softwareId = req.params.id;
  Software.findByIdAndRemove(softwareId)
    .then(() => {
      res.json({ message: 'Software deleted successfully' });
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};
