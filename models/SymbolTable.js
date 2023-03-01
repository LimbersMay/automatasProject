// noinspection SpellCheckingInspection
const { DataTypes } = require('sequelize');
const db = require('../db/connection');

// / -> localhost:3000
// /user

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

class SymbolTable {
    constructor() {
        this.table = {};
    }

    addSymbol(name, type, value, scope) {
        // logic to add a symbol to the table
    }
}

/* Example of a symbol
    const number = 15;
 */

// add the symbol to the table
// name: number
// type: int
// value: 15
// scope: global

const tabla = new SymbolTable();
tabla.addSymbol('number', 'int', 15, 'global');
