const express = require('express');
const router = express.Router();
<<<<<<< HEAD:src/routes/RawMaterial/rawMaterials.js
const rawMaterialController = require('../../controllers/RawMaterial/RawMaterialController');
=======
const rawMaterialController = require('../../controllers/raw-material/raw-material.controller');
>>>>>>> expenses:src/routes/raw-material/raw-materials.routes.js

router.get('/', rawMaterialController.getAll);
router.post('/', rawMaterialController.create);
router.get('/:id', rawMaterialController.getById);
router.put('/:id', rawMaterialController.update);
router.delete('/:id', rawMaterialController.remove);
router.put('/update/by-attributes', rawMaterialController.updateByAttributes);

module.exports = router;
