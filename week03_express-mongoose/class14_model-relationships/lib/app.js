const express = require('express');
const app = express();
const morgan = require('morgan');

// middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());


// routes
const pirates = require('./routes/pirates');
const crews = require('./routes/crews');
const weapons = require('./routes/weapons');

app.use('/api/pirates', pirates);
app.use('/api/crews', crews);
app.use('/api/weapons', weapons);

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
