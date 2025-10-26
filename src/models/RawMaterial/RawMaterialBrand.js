const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Brand = sequelize.define('RawMaterialBrand', {
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


module.exports = Brand;
