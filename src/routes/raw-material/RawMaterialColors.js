const express = require('express');
const router = express.Router();
<<<<<<<< HEAD:src/routes/raw-material/RawMaterialColors.js
const colorController = require('../../controllers/RawMaterial/RawMaterialColorController');
========
const colorController = require('../../controllers/raw-material/color.controller');
>>>>>>>> expenses:src/routes/raw-material/colors.routes.js

router.get('/', colorController.getAll);
router.post('/', colorController.create);
router.get('/:id', colorController.getById);
router.put('/:id', colorController.update);
router.delete('/:id', colorController.remove);

module.exports = router;
