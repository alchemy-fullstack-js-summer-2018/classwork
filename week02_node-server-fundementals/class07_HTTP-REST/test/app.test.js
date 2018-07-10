// new assertion library
const chai = require('chai');
// since we are using chai anyway for chai-http,
// let's use it's enhanced assert library!
const { assert } = chai;
// plugin that starts server and exposes superagent client
const chaiHttp = require('chai-http');
// register the plugin
chai.use(chaiHttp);

// import our server app
const app = require('../lib/app'); 

describe('simple http server', () => {

    it('responds with hello world on GET', () => {
        // this will start up server and return superagent client request object
        return chai.request(app)
            // .verb(path)
            .get('/')
            // use .then to get response.
            // this is NOT the response object from 
            // the server
            .then(res => {
                assert.equal(res.status, 200);
                assert.equal(res.text, 'hello world');
            });

    });

    it('says likes a pet', () => {
        return chai.request(app)
            .get('/pet-like')
            .then(res => {
                assert.equal(res.text, 'i like your pet');
            });
    });

    it('says it likes a specific pet', () => {
        return chai.request(app)
            .get('/pet-like/felix')
            .then(res => {
                assert.equal(res.text, 'i like your pet felix');
            });
    });

    it('says loathe a pet if feeling in query', () => {
        return chai.request(app)
            .get('/pet-like?feeling=loathe')
            .then(res => {
                assert.equal(res.text, 'i loathe your pet');
            });
    });

    it('returns a superpet object', () => {
        return chai.request(app)
            .get('/super-pet')
            .then(res => {
                assert.equal(res.body.name, 'super pet');
            });
    });

    it('responds with 404 on not found', () => {
        return chai.request(app)
            .get('/not-going-to-be-found')
            .then(res => {
                assert.equal(res.status, 404);
                assert.match(res.text, /Sorry/);
            });
    });

    it('returns sum of posted array numbers', () => {
        return chai.request(app)
            .post('/sum')
            .set('Content-Type', 'application/json')
            .send([3, 4, 2, 1])
            .then(res => {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, { sum: 10 });
            });
    });
});