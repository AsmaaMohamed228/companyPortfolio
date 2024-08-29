const Data = require('../models/database');

// Get all data entries
exports.getAllData = (req, res) => {
  Data.find()
    .then(dataEntries => {
      res.json(dataEntries);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Get a single data entry by ID
exports.getDataById = (req, res) => {
  const dataId = req.params.id;
  Data.findById(dataId)
    .then(dataEntry => {
      res.json(dataEntry);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Create a new data entry
exports.createData = (req, res) => {
  const dataEntry = req.body;
  const newData = new Data(dataEntry);
  newData.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Update a data entry by ID
exports.updateData = (req, res) => {
  const dataId = req.params.id;
  const updatedDataEntry = req.body;
  Data.findByIdAndUpdate(dataId, updatedDataEntry, { new: true })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};

// Delete a data entry by ID
exports.deleteData = (req, res) => {
  const dataId = req.params.id;
  Data.findByIdAndRemove(dataId)
    .then(() => {
      res.json({ message: 'Data entry deleted successfully' });
    })
    .catch(err => {
      res.status(400).json({ error: err });
    });
};
