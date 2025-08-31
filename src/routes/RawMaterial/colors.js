const express = require('express');
const router = express.Router();
const colorController = require('../../controllers/RawMaterial/colorController');

router.get('/', colorController.getAll);
router.post('/', colorController.create);
router.get('/:id', colorController.getById);
router.put('/:id', colorController.update);
router.delete('/:id', colorController.remove);

module.exports = router;
