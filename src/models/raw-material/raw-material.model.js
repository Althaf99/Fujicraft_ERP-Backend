const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const rawMaterialType = require('./RawMaterialType');
const rawMaterialColor = require('./RawMaterialColor');
const rawMaterialVendor = require('./RawMaterialVendor');
const rawMaterialBrand = require('./RawMaterialBrand');


const RawMaterial = sequelize.define('rawMaterial_list', {
  weight: { type: DataTypes.FLOAT },
  // materialCode: { type: DataTypes.STRING },
}, {
  timestamps: true,
});


RawMaterial.belongsTo(rawMaterialType, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });
RawMaterial.belongsTo(rawMaterialColor, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });
RawMaterial.belongsTo(rawMaterialVendor, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });
RawMaterial.belongsTo(rawMaterialBrand, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });

module.exports = RawMaterial;