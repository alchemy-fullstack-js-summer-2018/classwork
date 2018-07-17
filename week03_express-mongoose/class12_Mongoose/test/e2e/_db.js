require('dotenv').config({ path: './test/.env' });
require('../lib/connect');
const mongoose = require('mongoose');

after(() => {
    return mongoose.connection.close();
});

module.exports = {   
    dropCollection(name) {
        return mongoose.connection.dropCollection(name)
            .catch(err => {
                if(err.codeName !== 'NamespaceNotFound') throw err;
            });
    }
};