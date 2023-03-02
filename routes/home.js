const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/../public' });
});

router.get('/symbolTable', (req, res) => {
    res.sendFile('symbolTable.html', { root: __dirname + '/../public' });
});

module.exports = router;
