const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const RawMaterialColor = sequelize.define('rawMaterial_color', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { timestamps: true });

module.exports = RawMaterialColor;
