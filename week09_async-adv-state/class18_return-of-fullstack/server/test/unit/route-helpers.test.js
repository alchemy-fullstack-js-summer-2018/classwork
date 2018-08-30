const { assert } = require('chai');
const { respond } = require('../../lib/routes/route-helpers');

describe('respond middleware wrapper', () => {
   
    it('sends promise resolve', done => {
        const data = [];
        const req = {};
        const res = {
            json(json) { 
                assert.equal(json, data);
                done(); 
            }
        };

        const fn = request => {
            assert.equal(request, req);
            return Promise.resolve(data);
        };

        const middleware = respond(fn);
        middleware(req, res);
    });

    it('calls next with promise reject', done => {
        const error = {};
        const fn = () => Promise.reject(error);

        const middleware = respond(fn);
        middleware(null, null, err => {
            assert.equal(err, error);
            done();
        });
    });

    it('calls next with 404 reject if id and does not exist', done => {
        const fn = () => Promise.resolve(null);
        const req = { id: '123' };

        const middleware = respond(fn);
        middleware(req, null, err => {
            assert.equal(err.status, 404);
            assert.match(err.error, /123/);
            done();
        });
    });
});
