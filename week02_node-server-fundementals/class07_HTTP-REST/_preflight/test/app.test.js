const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;
const app = require('../lib/app');

describe('http app', () => {

    it('says hello world on GET /', () => {
        // Pass app to chai.request, which will start (call .listen())
        // and auto-close server after request
        return chai.request(app)
            // method and path
            .get('/')
            .then(response => {
                assert.equal(response.text, 'hello world');
            });
    });

    it('says custom greeting on GET / with query', () => {
        return chai.request(app)
            .get('/')
            .query('salutation=yo')
            .then(({ text }) => {
                assert.equal(text, 'yo world');
            });
    });

    it('returns cat object on GET /cats/garfield', () => {
        return chai.request(app)
            .get('/cats/garfield')
            .then(response => {
                assert.deepEqual(response.body, { 
                    name: 'garfield',
                    type: 'orange tabby' 
                });
            });
    });

    it('returns all cats on GET /cats', () => {
        return chai.request(app)
            .get('/cats')
            .then(response => {
                assert.equal(response.body.length, 4);
            });
    });

    it('return 404 on bad path', () => {
        return chai.request(app)
            .get('/bad')
            .then(response => {
                assert.equal(response.status, 404);
                // assert.equal(response.text, 'Sorry...')
            }); 
    });

    it('echos POST to /echo', () => {
        const obj = { foo: true };

        return chai.request(app)
            .post('/echo')
            .send(obj)
            .then(({ body }) => {
                assert.deepEqual(body, obj);
            });
    });
});