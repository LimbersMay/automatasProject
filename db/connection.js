const { Sequelize } = require('sequelize');

const db = new Sequelize('SymbolTableDB', 'limber', '15891', {
    dialect: 'mariadb'
});

module.exports = db;