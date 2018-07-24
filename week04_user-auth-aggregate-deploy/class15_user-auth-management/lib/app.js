const express = require('express');
const app = express();
const morgan = require('morgan');

// middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());


// routes
const ensureAuth = require('./util/ensure-auth')();

const pirates = require('./routes/pirates');
const auth = require('./routes/auth');

app.use('/api/auth', auth);
app.use('/api/pirates', ensureAuth, pirates);


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
