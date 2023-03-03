const { Sequelize } = require('sequelize');

const db = new Sequelize('automataFinalProject', 'limber', '15891', {
    dialect: 'mariadb'
});

module.exports = db;