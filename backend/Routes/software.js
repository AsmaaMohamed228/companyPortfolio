const express = require('express');
const softwareController = require('../Controllers/softwareController');

const router = express.Router();

router.get('/', softwareController.getAllSoftware);
router.get('/:id', softwareController.getSoftwareById);
router.post('/', softwareController.createSoftware);
router.put('/:id', softwareController.updateSoftware);
router.delete('/:id', softwareController.deleteSoftware);

module.exports = router;
