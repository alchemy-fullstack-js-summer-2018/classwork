const net = require('net');
const PORT = 15678;

const clients = new Set();

const server = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);
    client.write('welcome to my tcp chat server!\n');

    client.on('data', message => {
        clients.forEach(c => {
            if(c === client) return;
            c.write(message);
        });
    });

    client.on('close', () => {
        clients.delete(client);
    });
});

server.on('listening', () => {
    // eslint-disable-next-line
    console.log('TCP Chat Server listening on port', PORT);
});

server.listen(PORT);
