const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '', {
  host: 'localhost',
  port: 5430,
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;