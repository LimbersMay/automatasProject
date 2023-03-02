const express = require('express');
const app = express();

const db = require('./db/connection');
const SymbolTableRouter = require('./routes/symbolTable.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

db.authenticate().then();

app.use('/api', SymbolTableRouter);

app.listen(3000, () => {
    console.log('listening on port 3000');
});
