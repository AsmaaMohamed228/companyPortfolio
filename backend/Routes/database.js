const express = require('express');
const databaseController = require('../Controllers/databaseController');

const router = express.Router();

router.get('/',databaseController.getAllData);
router.get('/:id',databaseController.getDataById);
router.post('/',databaseController.createData);
router.put('/:id',databaseController.updateData);
router.delete('/:id',databaseController.deleteData);

module.exports = router;
