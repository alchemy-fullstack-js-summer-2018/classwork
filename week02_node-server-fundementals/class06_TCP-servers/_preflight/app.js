const net = require('net');
const Clients = require('./Clients');

const clients = new Clients();

const server = net.createServer(client /* client socket */ => {
    client.setEncoding('utf8');
    clients.add(client);

    client.on('data', data => {
        const message = shout(data);
        clients.others(client).forEach(c => c.write(message));
    });

    client.on('close', () => {
        clients.remove(client);
    });

});

module.exports = server;