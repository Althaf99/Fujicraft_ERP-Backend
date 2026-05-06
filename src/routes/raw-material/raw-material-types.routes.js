const express = require('express');
const router = express.Router();
const rawMaterialTypeController = require('../../controllers/raw-material/raw-material-type.controller');

router.get('/', rawMaterialTypeController.getAll);
router.post('/', rawMaterialTypeController.create);
router.get('/:id', rawMaterialTypeController.getById);
router.put('/:id', rawMaterialTypeController.update);
router.delete('/:id', rawMaterialTypeController.remove);

module.exports = router;
