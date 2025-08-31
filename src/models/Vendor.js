const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vendor = sequelize.define('Vendor', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  contact: { type: DataTypes.STRING },
}, { timestamps: true });

module.exports = Vendor;
