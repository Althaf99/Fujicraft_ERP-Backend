const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const RawMaterialType = sequelize.define('rawMaterial_type', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { timestamps: true });

module.exports = RawMaterialType;
