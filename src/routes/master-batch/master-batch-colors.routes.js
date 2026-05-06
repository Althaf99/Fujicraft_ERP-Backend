const express = require('express');
const router = express.Router();
const masterBatchColorController = require('../../controllers/master-batch/master-batch-color.controller');

router.get('/', masterBatchColorController.getAll);
router.post('/', masterBatchColorController.create);

module.exports = router;
