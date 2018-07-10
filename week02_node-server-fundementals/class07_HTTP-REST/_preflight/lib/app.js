const { parse } = require('url');
const defaultGreeting = require('./default-greeting');
const cats = require('./cats');
const bodyParser = require('./body-parser');
const { createReadStream } = require('fs');

module.exports = (req, res) => {
    const { pathname, query } = parse(req.url, true);
    
    if(pathname === '/') {
        res.end(defaultGreeting(query.salutation));
    }
    else if(pathname.startsWith('/cats')) {
        res.setHeader('Content-Type', 'application/json');
        const catKey = pathname.slice(1).split('/')[1];
        const cat = cats(catKey);
        res.end(JSON.stringify(cat));
    }
    else if(req.method === 'POST' && pathname === '/echo') {
        res.setHeader('Content-Type', 'application/json');
        bodyParser(req)
            .then(parsed => {
                res.end(JSON.stringify(parsed));
            });
    }
    else if(pathname === '/file') {
        res.setHeader('Content-Type', 'text/html');
        const readStream = createReadStream(`${__dirname}/test.html`);
        readStream.pipe(res);
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`Sorry, cannot <strong>${req.method} ${req.url}</strong>`);
    }
};
