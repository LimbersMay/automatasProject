const { Router } = require('express');
const SymbolTableController = require('../controllers/symbolTable.controller');

const router = Router();
const symbolTableController = new SymbolTableController();



router.post('/save-symbol', symbolTableController.add);

router.get('/get-symbol', symbolTableController.getAttribute);

router.get('/look-up', symbolTableController.lookUp);

router.get('/view', symbolTableController.view);

router.delete('/delete', symbolTableController.delete);

router.delete('/free', symbolTableController.free);

router.put('/update', symbolTableController.setAttribute);

module.exports = router;
