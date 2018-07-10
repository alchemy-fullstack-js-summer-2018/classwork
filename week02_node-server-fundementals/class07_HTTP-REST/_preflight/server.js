const app = require('./lib/app');
const http = require('http');

// same thing as below:
// const Server = http.Server;
// const server = new Server();
// server.on('request', app);

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('server started', server.address().port);
});

