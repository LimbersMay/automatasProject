const SymbolTable = require("../models/symbolTable.schema");
const {symbolExists} = require("../helpers/db.validations");
const {errors} = require("../utilities/errors");

class SymbolTableController {

    add = async (req, res) => {

        const { name, dataType, type, scope, line, value, father } = req.body;

        // 0. Check if parameters are valid
        if (!name || !dataType || !type || !scope || !line || !value) {
            return res.status(400).json({
                message: errors.MISSING_PARAMETERS
            });
        }

        // validations
        // 1. Check if symbol already exists
        const exists = await symbolExists(name, scope);

        if (exists) {
            return res.status(400).json({
                message: errors.SYMBOL_ALREADY_EXISTS
            });
        }

        // 2. Check if father exists
        if (father !== undefined) {
            const fatherExists = await symbolExists(father, scope);

            if (!fatherExists) {
                return res.status(400).json({
                    message: errors.FATHER_DOES_NOT_EXISTS
                });
            }
        }

        // Save symbol in database
        const symbol = new SymbolTable({
            name,
            dataType,
            type,
            scope,
            line,
            value,
            father
        });

        await symbol.save();

        const createdSymbol = await SymbolTable.findOne({
            where: {
                name,
                scope
            }
        });

        res.status(200).json({
            message: 'Symbol added successfully',
            createdSymbol
        });
    }

    lookUp = async (req, res) => {

        const { name, scope } = req.query;

        const symbol = await symbolExists(name, scope);

        res.status(200).json({
            symbol
        });
    }

    view = async (req, res) => {
        const symbols = await SymbolTable.findAll();
        res.status(200).json({
            symbols
        });
    }

    delete = async (req, res) => {
        const { name, scope } = req.query;

        // validations
        // 1. Check if symbol exists
        const symbol = await symbolExists(name, scope);

        if (!symbol) {
            return res.status(400).json({
                message: errors.SYMBOL_DOES_NOT_EXISTS
            });
        }

        // 2. Verify if symbol has children
        const children = await SymbolTable.findAll({
            where: {
                father: name
            }
        });

        if (children.length > 0) {
            return res.status(400).json({
                message: errors.SYMBOL_HAS_CHILDREN
            });
        }

        await SymbolTable.destroy({
            where: {
                name,
                scope
            }
        });

        res.status(200).json({
            message: 'Symbol deleted successfully'
        });
    }

    free = async (req, res) => {

        // Free all symbols
        // 1. Delete local symbols

        await SymbolTable.destroy({
            where: {}
        });

        res.status(201).json({
            message: "Symbols deleted successfully"
        })
    }

    setAttribute = async (req, res) => {

        const { name, value, father } = req.body;

        await SymbolTable.update(
            {
                value
            },
            {
                where: {
                    name,
                    father
                }
            }
        );
    }

    getAttribute = async (req, res) => {

        const { name } = req.query;

        const symbol = await SymbolTable.findOne({
            where: {
                name
            }
        });

        res.status(200).json({
            symbol
        });
    }
}

module.exports = SymbolTableController;
