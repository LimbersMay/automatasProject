const { Router } = require('express');
const SymbolTableController = require('../controllers/symbolTable.controller');

const router = Router();
const symbolTableController = new SymbolTableController();



router.post('/save-symbol', symbolTableController.add);

router.get('/look-up', symbolTableController.lookUp);

router.get('/view', symbolTableController.view);

router.delete('/delete', symbolTableController.delete);

router.delete('/free', symbolTableController.free);

router.put('/set-attribute', symbolTableController.setAttribute);

router.get('/get-attribute', symbolTableController.getAttribute);

module.exports = router;
