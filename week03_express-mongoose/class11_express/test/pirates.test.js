const mongo = require('../lib/mongodb');
const { assert } = require('chai');
const request = require('./request');

describe('Pirates API', () => {

    beforeEach(() => {
        return mongo.then(db => {
            return db.collection('pirates').remove();
        });
    });

    function save(pirate) {
        return request
            .post('/api/pirates')
            .send(pirate)
            .then(({ body }) => body);
    }

    let luffy;

    beforeEach(() => {
        return save({ name: 'Monkey D. Luffy' })
            .then(data => {
                luffy = data;
            });
    });

    it('saves a pirate', () => {
        assert.isOk(luffy._id);
    });

    it('gets a pirate', () => {
        return request
            .get(`/api/pirates/${luffy._id}`)
            .then(({ body }) => {
                assert.deepEqual(body, luffy);
            });
    });

    it('gets a list of pirates', () => {
        let zoro;
        return save({ name: 'Ronona Zoro' })
            .then(_zoro => {
                zoro = _zoro;
                return request.get('/api/pirates');
            })
            .then(({ body }) => {
                assert.deepEqual(body, [luffy, zoro]);
            });
    });

    // it('returns 404 on bad url', () => {
    //     return request
    //         .get('/bad')
    //         .then(res => {
    //             assert.equal(res.status, 404);
    //         });
    // });

    // it('gets a pirate by id', () => {
    //     return request
    //         .get(`/pirates/${pirate._id}`)
    //         .then(({ body }) => {
    //             assert.deepEqual(body, pirate);
    //         });
    // });

    // it('updates a pirate', () => {
    //     pirate.hat = 'straw';
    //     return request
    //         .put(`/pirates/${pirate._id}`)
    //         .send(pirate)
    //         .then(({ body }) => {
    //             assert.deepEqual(body, pirate);
    //         });
    // });

    // it('gets pirates', () => {
    //     return request
    //         .get('/pirates')
    //         .then(({ body }) => {
    //             assert.deepEqual(body, [pirate]);
    //         });
    // });

    // it('removes a pirate', () => {
    //     return request
    //         .del(`/pirates/${pirate._id}`)
    //         .then(() => {
    //             return request.get('/pirates');
    //         })
    //         .then(({ body }) => {
    //             assert.deepEqual(body, []);
    //         });
    // });
});
