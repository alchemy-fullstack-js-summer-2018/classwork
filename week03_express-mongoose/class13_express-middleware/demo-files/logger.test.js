const { assert } = require('chai');

function createLogger(log) {
    return ({ method, path }, res, next) => {
        log(`${method} ${path}`);
        next();
    };
}

it('logs message with request method and path', () => {
    // let message;
    // const log = m => message = m;
    const log = message => log.message = message;

    const logger = createLogger(log);

    const req = {
        method: 'GET',
        path: '/api/pirates'
    };

    // let called = false;
    // const next = () => called = true;
    const next = () => next.called = true;

    logger(req, null, next);

    // assertions!

    // #1 next was called
    assert.isTrue(next.called /* or called */);

    // #2 log was called with correct message
    assert.equal(log.message /* or message */, 'GET /api/pirates');
});

it('handles async', done => {
    const weather = {};
    const location = {};

    const api = zip => {
        // you can test params
        assert.equal(zip, '12345');
        return Promise.resolve({
            weather, location
        });
    };

    const weather = createMiddleware(api);

    const next = () => {
        // make assertions
        // test that req.body has weather and location
        
        // let mocha know we are done...
        done();
    };

    const req = {
        body: {
            zip: '12345'
        }
    };

    middleware(req, null, next);

});