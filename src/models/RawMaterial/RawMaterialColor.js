const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Color = sequelize.define('RawMaterialColor', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { timestamps: true });

module.exports = Color;
