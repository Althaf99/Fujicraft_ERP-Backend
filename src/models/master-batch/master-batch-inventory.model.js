const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const MasterBatchColor = require('./MasterBatchColor');
const Vendor = require('./MasterBatchVendor');

const MasterBatchInventory = sequelize.define('masterBatch_inventory', {
  colorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: MasterBatchColor, key: 'id' }
  },
  code: { type: DataTypes.STRING, allowNull: false },
  vendorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Vendor, key: 'id' }
  },
  weight: { type: DataTypes.FLOAT, allowNull: false }
}, { timestamps: true });

module.exports = MasterBatchInventory;
