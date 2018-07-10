const { assert } = require('chai');
const bodyParser = require('../lib/body-parser');
const EventEmitter = require('events');

describe('body parser', () => {

    it('reads body', () => {
        const req = new EventEmitter();
        const cat = { name: 'duchess' };

        const promise = bodyParser(req)
            .then(body => {
                assert.deepEqual(body, cat);
            });

        req.emit('data', JSON.stringify(cat));
        req.emit('end');

        return promise;
    });
});