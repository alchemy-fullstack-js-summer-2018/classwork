require('dotenv').config({ path: './test/.env.test' });
const chai = require('chai');
const chaiHttp = require('chai-http');
const client = require('../lib/db-client');
const app = require('../lib/app');

const { assert } = chai;
chai.use(chaiHttp);

describe('pets', () => {

    before(() => client.query('DELETE FROM pets'));

    let garfield = {
        name: 'garfield',
        category_id: 1
    };

    let duchess = {
        name: 'Duchess',
        category_id: 1,
        color: 'white',
        description: 'star from Aristocats'
    };

    before(() => {
        return chai.request(app)
            .post('/pets')
            .send(duchess)
            .then(({ body }) => {
                assert.equal(body.name, duchess.name);
                assert.equal(body.category_id, duchess.category_id);
                assert.equal(body.color, duchess.color);
                assert.equal(body.description, duchess.description);
                duchess = body;
            });       
    });

    it('saves a pet', () => {
        assert.ok(duchess.id);
    });

    it('gets a pet by id', () => {
        return chai.request(app)
            .get(`/pets/${duchess.id}`)
            .then(({ body }) => {
                assert.deepEqual(body, duchess);
            });
    });

    it('update a pet', () => {
        duchess.color = 'ivory';
        return chai.request(app)
            .put(`/pets/${duchess.id}`)
            .send(duchess)
            .then(({ body }) => {
                assert.deepEqual(body, duchess);
            });
    });

    it('gets all pets', () => {
        return chai.request(app)
            .post('/pets')
            .send(garfield)
            .then(({ body }) => {
                garfield = body;
                return chai.request(app)
                    .get('/pets');
            })
            .then(({ body }) => {
                assert.deepEqual(body, [duchess, garfield]);
            });
    });

    it('removes a pet', () => {
        return chai.request(app)
            .del(`/pets/${garfield.id}`)
            .then(() => {
                return chai.request(app)
                    .get('/pets');
            })
            .then(({ body }) => {
                assert.deepEqual(body, [duchess]);
            });
    });

    after(() => {
        client.end();
    });
});