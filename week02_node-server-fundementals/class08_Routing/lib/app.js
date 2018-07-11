const { parse } = require('url');
const notFound = require('./routes/not-found');
const pets = require('./routes/pets');
const bodyParser = require('./body-parser');
const { createReadStream } = require('fs');

const routes = {
    pets,
    // users
};

module.exports = (req, res) => {
    if(req.url === '/' && req.method === 'GET') {
        return createReadStream(`${__dirname}/index.html`).pipe(res);
    }

    const url = parse(req.url, true);     
    const parts = url.pathname.split('/').slice(1);
    req.id = parts[1];

    const resource = parts[0];
    
    res.send = data => res.end(JSON.stringify(data));
    const route = routes[resource] || notFound;
    res.setHeader('Content-Type', 'application/json');

    bodyParser(req)
        .then(body => {
            req.body = body;
            route(req, res);
        });
};