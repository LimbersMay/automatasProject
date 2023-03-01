// noinspection SpellCheckingInspection
const { DataTypes } = require('sequelize');
const db = require('../db/connection');

/*
    Symbol Table required attributes:
    - name
    - dataType
    - type
    - scope
    - line
    - value
    - father

 */

const SymbolTableSchema = db.define('SymbolTableSchema', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    dataType: {
        type: DataTypes.STRING,
        required: true
    },
    type: {
        type: DataTypes.STRING,
        required: true
    },
    scope: {
        type: DataTypes.STRING,
        required: true
    },
    line: {
        type: DataTypes.INTEGER,
        required: true
    },
    value: {
        type: DataTypes.STRING,
        required: true
    },
    father: {
        type: DataTypes.STRING,
        required: true
    }
}, {
    tableName: 'symbolTable'
});
