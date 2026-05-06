const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Vendor = require('./MasterBatchVendor');

const MasterBatchColor = sequelize.define('masterBatch_color', {
  name: { type: DataTypes.STRING, allowNull: false },
  code: { type: DataTypes.STRING, allowNull: false, unique: true },
  vendorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Vendor, key: 'id' }
  }
}, { timestamps: true });

module.exports = MasterBatchColor;
