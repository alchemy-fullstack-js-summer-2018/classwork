/* eslint no-console: off */
const http = require('http');
const app = require('./lib/app');
const connect = require('./lib/util/connect');

// this env name "PORT" is used by heroku
const PORT = process.env.PORT || 3000;
// this env name "MONGODB_URI" is used by heroku when adding an mLab instance
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pirates';

connect(MONGODB_URI);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('server running on', server.address().port);
});