const mongo = require('../lib/mongodb');
const { assert } = require('chai');
const request = require('./request');

describe('Pirates API', () => {

    beforeEach(() => {
        return mongo.then(db => {
            return db.collection('pirates').remove();
        });
    });

    let pirate;
    beforeEach(() => {
        const data = {
            name: 'Monkey D. Luffy',
            crew: 'Straw Hats',
            hat: 'bowler'
        };

        return request
            .post('/pirates')
            .send(data)
            .then(({ body }) => {
                assert.ok(body._id);
                assert.equal(body.name, data.name);
                pirate = body;
            });
    });

    it('saves a pirate', () => {
        assert.ok(pirate._id);
    });

    it('returns 404 on bad url', () => {
        return request
            .get('/bad')
            .then(res => {
                assert.equal(res.status, 404);
            });
    });

    it('gets a pirate by id', () => {
        return request
            .get(`/pirates/${pirate._id}`)
            .then(({ body }) => {
                assert.deepEqual(body, pirate);
            });
    });

    it('updates a pirate', () => {
        pirate.hat = 'straw';
        return request
            .put(`/pirates/${pirate._id}`)
            .send(pirate)
            .then(({ body }) => {
                assert.deepEqual(body, pirate);
            });
    });

    it('gets pirates', () => {
        return request
            .get('/pirates')
            .then(({ body }) => {
                assert.deepEqual(body, [pirate]);
            });
    });

    it('removes a pirate', () => {
        return request
            .del(`/pirates/${pirate._id}`)
            .then(() => {
                return request.get('/pirates');
            })
            .then(({ body }) => {
                assert.deepEqual(body, []);
            });
    });
});
