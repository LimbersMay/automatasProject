
const SymbolTable = require('../models/symbolTable.schema');

const symbolExists = async (name, scope) => {

    return await SymbolTable.findOne({
        where: {
            name,
            scope
        }
    });
}

module.exports = {
    symbolExists
}
