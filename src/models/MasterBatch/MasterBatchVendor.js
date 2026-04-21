const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const MasterBatchVendor = sequelize.define('masterBatch_vendor', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  contact: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
}, { timestamps: true });

module.exports = MasterBatchVendor;
