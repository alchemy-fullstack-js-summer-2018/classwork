module.exports = class Clients {
    constructor() {
        this.set = new Set();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.set.add(client);
    }

    remove(client) {
        this.set.delete(client);
    }

    getAllClients() {
        return [...this.set.values()];
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }
};