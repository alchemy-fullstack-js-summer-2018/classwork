const { parse } = require('url');
const pirates = require('./routes/pirates');
const notFound = require('./routes/not-found');
const bodyParser = require('./body-parser');
const { createReadStream } = require('fs');

const routes = {
    pirates
};

module.exports = (req, res) => {
    if(req.url === '/' && req.method === 'GET') {
        return createReadStream(`${__dirname}/index.html`).pipe(res);
    }

    const parsedUrl = parse(req.url, true);
    req.query = parsedUrl.query;
    req.paths = parsedUrl.pathname.slice(1).split('/');
    const route = req.paths[0];
    req.id = req.paths[1];

    res.setHeader('Content-Type', 'application/json');
    res.send = obj => res.end(JSON.stringify(obj));

    const route = routes[route] || notFound;

    bodyParser(req)
        .then(body => {
            req.body = body;
            route(req, res);
        });
};