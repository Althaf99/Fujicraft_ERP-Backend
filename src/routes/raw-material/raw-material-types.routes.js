const express = require('express');
const router = express.Router();
<<<<<<< HEAD:src/routes/RawMaterial/rawMaterialTypes.js
const rawMaterialTypeController = require('../../controllers/RawMaterial/RawMaterialTypeController');
=======
const rawMaterialTypeController = require('../../controllers/raw-material/raw-material-type.controller');
>>>>>>> expenses:src/routes/raw-material/raw-material-types.routes.js

router.get('/', rawMaterialTypeController.getAll);
router.post('/', rawMaterialTypeController.create);
router.get('/:id', rawMaterialTypeController.getById);
router.put('/:id', rawMaterialTypeController.update);
router.delete('/:id', rawMaterialTypeController.remove);

module.exports = router;
