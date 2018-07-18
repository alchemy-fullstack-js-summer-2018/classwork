const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Pirates API', () => {

    beforeEach(() => dropCollection('pirates'));

    function save(pirate) {
        return request
            .post('/api/pirates')
            .send(pirate)
            .then(({ body }) => body);
    }

    let luffy;
    beforeEach(() => {
        return save({ name: 'Monkey Luffy' })
            .then(data => {
                luffy = data;
            });
    });

    it('saves a pirate', () => {
        assert.isOk(luffy._id);
    });

    it('gets a pirate by id', () => {
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

    it('updates a pirate', () => {
        luffy.name = 'Monkey D. Luffy';
        return request
            .put(`/api/pirates/${luffy._id}`)
            .send(luffy)
            .then(({ body }) => {
                assert.deepEqual(body, luffy);
            });
    });

    it('removes a pirate', () => {
        return request
            .delete(`/api/pirates/${luffy._id}`)
            .then(res => {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, { removed: true });
                return request.get('/api/pirates');
            })
            .then(({ body }) => {
                assert.deepEqual(body, []);
            });
    });
});
