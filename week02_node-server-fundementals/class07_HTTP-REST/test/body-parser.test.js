const { assert } = require('chai');
const EventEmitter = require('events');
const bodyParser = require('../lib/body-parser');

describe('body parser', () => {

    it('returns deserialized object from stream', () => {
        const obj = { name: 'test' };
        const req = new EventEmitter();
        req.headers = {
            'content-type': 'application/json'
        };

        const promise = bodyParser(req)
            .then(body => {
                assert.deepEqual(body, obj);
            });

        req.emit('data', JSON.stringify(obj));
        req.emit('end');

        return promise;
    });

    it('fails if content-type is not application/json', () => {
        const req = {
            headers: {
                'content-type': 'text/html'
            }
        };

        return bodyParser(req)
            .then(
                () => { throw new Error('Expected failure got success'); },
                err => {
                    assert.equal(err, 'not json');
                }
            );
    });
});