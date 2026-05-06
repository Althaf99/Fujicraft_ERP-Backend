const express = require('express');
const router = express.Router();
const masterBatchInventoryController = require('../../controllers/master-batch/master-batch-inventory.controller');

router.get('/', masterBatchInventoryController.getAll);
router.post('/', masterBatchInventoryController.create);

module.exports = router;
