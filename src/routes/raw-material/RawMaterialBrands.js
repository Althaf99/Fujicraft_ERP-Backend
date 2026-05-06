const express = require('express');
const router = express.Router();
<<<<<<<< HEAD:src/routes/raw-material/RawMaterialBrands.js
const brandController = require('../../controllers/RawMaterial/RawMaterialBrandController');
========
const brandController = require('../../controllers/raw-material/brand.controller');
>>>>>>>> expenses:src/routes/raw-material/brands.routes.js

router.get('/', brandController.getBrands);
router.post('/', brandController.createBrand);

module.exports = router;
