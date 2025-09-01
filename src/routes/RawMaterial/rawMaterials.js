const express = require('express');
const router = express.Router();
const rawMaterialController = require('../../controllers/RawMaterial/rawMaterialController');

router.get('/', rawMaterialController.getAll);
router.post('/', rawMaterialController.create);
router.get('/:id', rawMaterialController.getById);
router.put('/:id', rawMaterialController.update);
router.delete('/:id', rawMaterialController.remove);
router.put('/update/by-attributes', rawMaterialController.updateByAttributes);

module.exports = router;
