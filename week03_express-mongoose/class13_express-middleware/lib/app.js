const express = require('express');
const app = express();
const morgan = require('morgan');

// middleware
// const checkAuth = require('./util/create-cathentication')();
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());


// routes
const pirates = require('./routes/pirates');

app.use('/api/pirates', /*checkAuth, */ pirates);


const { handler, api404 } = require('./util/errors');

// api 404
app.use('/api', api404);
// general 404
app.use((req, res) => {
    res.sendStatus(404);
});


// error handler (goes last!)
// eslint-disable-next-line
app.use(handler);

module.exports = app;
