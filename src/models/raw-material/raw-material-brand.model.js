const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

<<<<<<<< HEAD:src/models/raw-material/RawMaterialBrand.js
const Brand = sequelize.define('RawMaterialBrand', {
========
const RawMaterialBrand = sequelize.define('rawMaterial_brand', {
>>>>>>>> expenses:src/models/raw-material/raw-material-brand.model.js
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = RawMaterialBrand;
