const { createServer } = require('http');
const app = require('./lib/app');

const PORT = 3000;

createServer(app).listen(3000, () => {
    console.log('server running on', server.address().port);
});