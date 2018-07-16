require('dotenv').config({ path: './test/.env' });
const mongo = require('../lib/mongodb');

after(() => {
    return mongo.client.close();
});