
const SymbolTable = require('../models/symbolTable.schema');

const findSymbol = async (criteria) => {

    return await SymbolTable.findOne({
        where: {
            ...criteria
        }
    });
}

module.exports = {
    findSymbol
}
