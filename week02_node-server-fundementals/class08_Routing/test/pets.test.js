const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = chai;
chai.use(chaiHttp);
const app = require('../lib/app');
const client = require('../lib/db-client');

describe('pets API', () => {

    beforeEach(() => client.query('DELETE FROM pets'));

    let garfield = {
        name: 'garfield',
        category_id: 1,
        color: 'orange',
        description: 'lasagna anyone?'
    };

    let duchess = {
        name: 'Duchess',
        category_id: 1,
        color: 'white',
        description: 'star from Aristocats'
    };

    function save(pet) {
        return chai.request(app)
            .post('/pets')
            .send(pet)
            .then(({ body }) => {
                pet.id = body.id;
                assert.deepEqual(body, pet);
            });
    }

    beforeEach(() => {
        return save(duchess);
    });

    beforeEach(() => {
        return save(garfield);
    });

    it('saves a pet', () => {
        assert.ok(duchess.id);
    });

    it('updates a pet', () => {
        duchess.color = 'ivory';
        return chai.request(app)
            .put(`/pets/${duchess.id}`)
            .send(duchess)
            .then(({ body }) => {
                assert.equal(body.color, 'ivory');
            });
    });

    it('updates only pet being updated', () => {
        duchess.color = 'ivory';
        return chai.request(app)
            .put(`/pets/${duchess.id}`)
            .send(duchess)
            .then(() => chai.request(app).get('/pets'))
            .then(({ body }) => {
                body.sort((a, b) => a.id - b.id);
                assert.deepEqual(body, [duchess, garfield]);
            });
    });

    it('GET pet by id', () => {
        return chai.request(app)
            .get(`/pets/${duchess.id}`)
            .then(({ body }) => {
                assert.deepEqual(body, duchess);
            });
    });

    it('GET pets', () => {
        return chai.request(app)
            .get('/pets')
            .then(({ body }) => {
                assert.deepEqual(body, [duchess, garfield]);
            });
    });

    it('DELETE pet', () => {
        return chai.request(app)
            .del(`/pets/${duchess.id}`)
            .then(() => {
                return chai.request(app)
                    .get(`/pets/${duchess.id}`);
            })
            .then(res => {
                assert.equal(res.status, 404);
            });
    });

});