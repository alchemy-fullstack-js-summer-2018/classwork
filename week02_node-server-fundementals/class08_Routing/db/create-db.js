/* eslint no-console: off, quotes: off */

const client = require('../lib/db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) UNIQUE NOT NULL
  );

  CREATE TABLE IF NOT EXISTS pets(
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    color VARCHAR(256),
    category_id INTEGER NOT NULL REFERENCES categories(id),
    description VARCHAR(256)
  );
`)
    .then(
        () => console.log('db task successful'),
        err => console.error(err)
    )
    .then(() => client.end());