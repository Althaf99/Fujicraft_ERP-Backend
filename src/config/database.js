const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'root', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
  define: {
    schema: 'erp', // Set the default schema for all models
  },
});

module.exports = sequelize;