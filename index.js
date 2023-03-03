const express = require('express');
const app = express();

const db = require('./db/connection');
const bodyParser = require("body-parser");

// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routes
app.use('/api', require('./routes/symbolTable.route'));
app.use('/', require('./routes/home'));

// database connection
db.authenticate().then();

// server
app.listen(3000, () => {
    console.log('listening on port 3000');
});
