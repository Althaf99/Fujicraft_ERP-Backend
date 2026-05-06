const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

<<<<<<<< HEAD:src/models/raw-material/RawMaterialColor.js
const Color = sequelize.define('RawMaterialColor', {
========
const RawMaterialColor = sequelize.define('rawMaterial_color', {
>>>>>>>> expenses:src/models/raw-material/raw-material-color.model.js
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { timestamps: true });

module.exports = RawMaterialColor;
