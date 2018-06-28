const http = require('http');

// http.createServer(handler);

const server = new http.Server();

server.on('request', (req, res) => {

});

server.listen(3000);