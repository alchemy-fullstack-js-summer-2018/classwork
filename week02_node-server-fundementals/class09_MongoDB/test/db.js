require('dotenv').config({ path: './test/.env' });
const mongo = require('../lib/mongodb');

after(() => {
    mongo.client.close();
});