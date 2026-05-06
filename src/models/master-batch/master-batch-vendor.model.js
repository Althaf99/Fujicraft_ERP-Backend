const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

<<<<<<<< HEAD:src/models/raw-material/RawMaterialVendor.js
const Vendor = sequelize.define('RawMaterialVendor', {
========
const MasterBatchVendor = sequelize.define('masterBatch_vendor', {
>>>>>>>> expenses:src/models/master-batch/master-batch-vendor.model.js
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  contact: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
}, { timestamps: true });

module.exports = MasterBatchVendor;
