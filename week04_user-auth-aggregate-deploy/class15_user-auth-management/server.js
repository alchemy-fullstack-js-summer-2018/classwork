/* eslint no-console: off */
require('dotenv').config();
const connect = require('./lib/util/connect');
const { createServer } = require('http');
const app = require('./lib/app');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pirates';
connect(MONGODB_URI);

const PORT = process.env.PORT || 3000;

const server = createServer(app);
server.listen(PORT, () => {
    console.log('server running on', server.address().port);
});