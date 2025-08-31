const express = require('express');
const router = express.Router();
const rawMaterialController = require('../controllers/rawMaterialController');

router.get('/', rawMaterialController.getAll);
router.post('/', rawMaterialController.create);
router.get('/:id', rawMaterialController.getById);
router.put('/:id', rawMaterialController.update);
router.delete('/:id', rawMaterialController.remove);

module.exports = router;
