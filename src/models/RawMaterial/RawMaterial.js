const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const RawMaterialType = require('./RawMaterialType');
const Color = require('./Color');
const Vendor = require('./Vendor');
const Brand = require('./Brand');


const RawMaterial = sequelize.define('RawMaterial', {
  weight: { type: DataTypes.FLOAT },
  materialCode: { type: DataTypes.STRING },
}, {
  timestamps: true,
});


RawMaterial.belongsTo(RawMaterialType, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });
RawMaterial.belongsTo(Color, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });
RawMaterial.belongsTo(Vendor, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });
RawMaterial.belongsTo(Brand, { foreignKey: { allowNull: false }, onDelete: 'RESTRICT' });

module.exports = RawMaterial;
