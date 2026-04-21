const express = require('express');
const router = express.Router();
const masterBatchInventoryController = require('../../controllers/MasterBatch/masterBatchInventoryController');

router.get('/', masterBatchInventoryController.getAll);
router.post('/', masterBatchInventoryController.create);

module.exports = router;
