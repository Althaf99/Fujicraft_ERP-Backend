const express = require('express');
const router = express.Router();
const vendorController = require('../../controllers/RawMaterial/vendorController');

router.get('/', vendorController.getAll);
router.post('/', vendorController.create);
router.get('/:id', vendorController.getById);
router.put('/:id', vendorController.update);
router.delete('/:id', vendorController.remove);

module.exports = router;
