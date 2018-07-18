const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

const pirates = require('./routes/pirates');

app.use('/api/pirates', pirates);

module.exports = app;
