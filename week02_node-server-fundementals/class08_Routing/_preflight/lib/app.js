const { parse } = require('url');
const pets = require('./routes/pets');
const notFound = require('./routes/not-found');
const bodyParser = require('./body-parser');
const { createReadStream } = require('fs');

const routes = {
    __proto__: null,
    pets,
    // stores,
    // customers
};

// using the Map class
// const routes = new Map();
// routes.set('pets', pets);
// routes.set('stores', stores);
// routes.set('customers', customers);

module.exports = (req, res) => {
    if(req.url === '/' && req.method === 'GET') {
        return createReadStream(`${__dirname}/index.html`)
            .pipe(res);
    }

    const parsedUrl = parse(req.url, true);
    req.query = parsedUrl.query;
    req.paths = parsedUrl.pathname.slice(1).split('/');
    const key = req.paths[0];

    res.setHeader('Content-Type', 'application/json');
    res.send = obj => res.end(JSON.stringify(obj));

    const route = routes[key] || notFound;

    bodyParser(req)
        .then(body => {
            req.body = body;
            route(req, res);
        });
};