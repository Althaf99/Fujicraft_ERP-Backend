const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RawMaterialType = sequelize.define('RawMaterialType', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { timestamps: true });

module.exports = RawMaterialType;
