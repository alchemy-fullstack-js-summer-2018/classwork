const { assert } = require('chai');
const createCathentication = require('../../lib/util/create-cathentication');
const { HttpError } = require('../../lib/util/errors');

describe('cathentication middleware', () => {

    it('factory function returns middleware function with correct params', () => {
        const authMiddleware = createCathentication();
        assert.typeOf(authMiddleware, 'function');
        assert.equal(authMiddleware.length, 3);
    });

    it('calls next when password is correct', () => {
        // use factory to create a middleware instance with password set
        const authMiddleware = createCathentication('meow');

        // setup of our mocks
        const req = {
            query: {
                password: 'meow'
            }
        };

        let called = false;
        const next = () => called = true;

        // simulate express calling our middleware function
        authMiddleware(req, null, next);
        
        // assertions
        assert.equal(called, true);
    });

    it('Return 401 when password is incorrect', () => {
        // use factory to create a middleware instance with password set
        const authMiddleware = createCathentication('meow');

        // setup of our mocks
        const req = {
            query: {
                password: 'woof'
            }
        };

        const next = error => next.error = error;

        // simulate express calling our middleware function
        authMiddleware(req, null, next);
        
        // statusCode send of 401
        const { error } = next;
        assert.instanceOf(error, HttpError);
        assert.equal(error.code, 401);
        assert.deepEqual(error.message, 'Unauthorized');

    });
});