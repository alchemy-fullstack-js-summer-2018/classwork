const express = require('express');
const app = express();
const morgan = require('morgan');

const checkAuth = require('./create-cathentication')();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

const pirates = require('./routes/pirates');

app.use('/api/pirates', checkAuth, pirates);

module.exports = app;
