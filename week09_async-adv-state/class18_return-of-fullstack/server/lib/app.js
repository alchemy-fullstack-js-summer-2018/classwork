const express = require('express');
const morgan = require('morgan');
const { resolve } = require('path');
const app = express();
const errorHandler = require('./util/error-handler');
const createEnsureAuth = require('./util/ensure-auth');
// add our mongoose plugins
require('./models/register-plugins');
const redirectHttp = require('./util/redirect-http');
const checkConnection = require('./util/check-connection');

// COMMON MIDDLEWARE
if(process.env.NODE_ENV === 'production') {
    app.use(redirectHttp());
}

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

// ROUTES
const auth = require('./routes/auth');
const pirates = require('./routes/pirates');
const ships = require('./routes/ships');
const crews = require('./routes/crews');

// const ensureAuth = createEnsureAuth();

if(process.env.NODE_ENV !== 'production') {
    app.use(checkConnection());
}

app.use('/api/auth', auth);
app.use('/api/crews', crews);
app.use('/api/ships', ships);
app.use('/api/pirates', pirates);

// CATCH ALL for SPA
app.use((req, res) => {
    res.sendFile('index.html', { 
        root: resolve(__dirname + '/../public/') 
    });
});

// ERROR HANDLER
app.use(errorHandler());

module.exports = app;