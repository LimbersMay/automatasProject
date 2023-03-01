// noinspection SpellCheckingInspection
const db = require('../db/connection');

// / -> localhost:3000
// /user

const SymbolTableSchema = db.define('SymbolTableSchema', {

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
