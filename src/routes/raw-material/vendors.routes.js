const express = require('express');
const router = express.Router();
<<<<<<<< HEAD:src/routes/raw-material/RawMaterialvendors.js
const vendorController = require('../../controllers/RawMaterial/RawMaterialVendorController');
========
const vendorController = require('../../controllers/raw-material/vendor.controller');
>>>>>>>> expenses:src/routes/raw-material/vendors.routes.js

router.get('/', vendorController.getAll);
router.post('/', vendorController.create);
router.get('/:id', vendorController.getById);
router.put('/:id', vendorController.update);
router.delete('/:id', vendorController.remove);

module.exports = router;
