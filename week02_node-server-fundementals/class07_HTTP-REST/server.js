const http = require('http');
const app = require('./lib/app');

// below is shortcut for:
// const Server = http.Server;
// const server = new Server();
// server.on('request', /*listener*/);

// shortcut, easy way to create server by 
// passing in listening function with signature
// (parameters) of request and response
const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
    console.log('server running on', server.address().port);
});
