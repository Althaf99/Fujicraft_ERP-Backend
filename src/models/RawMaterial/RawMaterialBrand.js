const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const RawMaterialBrand = sequelize.define('rawMaterial_brand', {
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
