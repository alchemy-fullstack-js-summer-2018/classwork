/* eslint no-console: off, quotes: off */

const client = require('../lib/db-client');

const categories = ['cats', 'birds', 'lizards', 'dogs'];

const categoryPromises = categories.map(category => {
    return client.query(
        `INSERT INTO categories(name) 
        VALUES($1)
        ON CONFLICT DO NOTHING;`,
        [category]
    );
});

Promise.all(categoryPromises)
    .then(() => {
        return client.query(
            `SELECT * FROM categories`
        );
    })
    .then(result => {
        console.log(result.rows);
    })
    .then(
        () => console.log('load successful'),
        err => console.error(err)
    )
    .then(() => {
        client.end();
    });