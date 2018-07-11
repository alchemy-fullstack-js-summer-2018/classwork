const { parse } = require('url');
const bodyParser = require('./body-parser');

const superPet = {
    name: 'super pet'
};

const things = [];

module.exports = (req, res) => {
    // use node's built in url parser
    const url = parse(req.url, true);     
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'pet-like') {
        const feeling = url.query.feeling || 'like';
        let message = `i ${feeling} your pet${parts[1] ? ' ' + parts[1] : ''}`;
        res.end(message);
    }
    else if(parts[0] === 'super-pet') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(superPet));
    }
    else if(parts[0] === '') {
        // res (response) implements (is a) writeable stream
        res.write('hello world');
        res.end();
    }
    else if(req.method === 'POST' && parts[0] === 'sum') {
        bodyParser(req)
            .then(body => {
                const sum = body.reduce((a, b) => a + b);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ sum }));
            })
            .catch(() => {
                res.statusCode = 500;
                res.end();
            });
    }
    else {
        res.statusCode = 404;
        res.end('Sorry, can\'t help you');
    }
};