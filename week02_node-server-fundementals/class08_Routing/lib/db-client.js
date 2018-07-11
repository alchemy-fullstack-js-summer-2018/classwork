/* eslint no-console: off */

// Load the env variables in the `.env` file into process.env
const dotenv = require('dotenv');
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/superpets';

const pg = require('pg');
const Client = pg.Client;

const client = new Client(DATABASE_URL);
client.connect()
    .then(() => console.log('connected to db', DATABASE_URL))
    .catch(err => console.error('connection error', err));

client.on('error', err => {
    console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;