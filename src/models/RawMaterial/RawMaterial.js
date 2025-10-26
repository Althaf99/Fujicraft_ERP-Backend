const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const RawMaterialType = require('./RawMaterialType');
const Color = require('./RawMaterialColor');
const Vendor = require('./RawMaterialVendor');
const Brand = require('./RawMaterialBrand');


const RawMaterial = sequelize.define('RawMaterial', {
  weight: { type: DataTypes.FLOAT },
  materialCode: { type: DataTypes.STRING },
}, {
  timestamps: true,
  // schema: 'erp', // Explicitly set the schema for this model
});


RawMaterial.belongsTo(RawMaterialType, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });
RawMaterial.belongsTo(Color, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });
RawMaterial.belongsTo(Vendor, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });
RawMaterial.belongsTo(Brand, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });

module.exports = RawMaterial;
