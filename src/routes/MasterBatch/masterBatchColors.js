const express = require('express');
const router = express.Router();
const masterBatchColorController = require('../../controllers/MasterBatch/masterBatchColorController');

router.get('/', masterBatchColorController.getAll);
router.post('/', masterBatchColorController.create);

module.exports = router;
