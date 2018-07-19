const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

const { checkOk } = request;

describe('Crews API', () => {

    beforeEach(() => dropCollection('crews'));

    function save(crew) {
        return request
            .post('/api/crews')
            .send(crew)
            .then(checkOk)
            .then(({ body }) => body);
    }

    let strawHats;
    beforeEach(() => {
        return save({ name: 'Straw Hats' })
            .then(data => {
                strawHats = data;
            });
    });

    it('saves a crew', () => {
        assert.isOk(strawHats._id);
    });

    it('gets a crew by id', () => {
        return request
            .get(`/api/crews/${strawHats._id}`)
            .then(({ body }) => {
                assert.deepEqual(body, strawHats);
            });
    });

    it('gets a list of crews', () => {
        let foxxy;
        return save({ name: 'Foxxy Pirates' })
            .then(_foxxy => {
                foxxy = _foxxy;
                return request.get('/api/crews');
            })
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [strawHats, foxxy]);
            });
    });

    it('updates a crew', () => {
        strawHats.flag = 'straw-hat-flag.png';
        return request
            .put(`/api/crews/${strawHats._id}`)
            .send(strawHats)
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, strawHats);
            });
    });

    it('removes a crew', () => {
        return request
            .delete(`/api/crews/${strawHats._id}`)
            .then(checkOk)
            .then(res => {
                assert.deepEqual(res.body, { removed: true });
                return request.get('/api/crews');
            })
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, []);
            });
    });

});
