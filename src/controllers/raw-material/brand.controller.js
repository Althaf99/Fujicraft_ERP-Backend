<<<<<<<< HEAD:src/controllers/raw-material/RawMaterialBrandController.js
const Brand = require('../../models/RawMaterial/RawMaterialBrand');
========
const Brand = require('../../models/raw-material/raw-material-brand.model');
>>>>>>>> expenses:src/controllers/raw-material/brand.controller.js

exports.getBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBrand = async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.status(201).json(brand);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
