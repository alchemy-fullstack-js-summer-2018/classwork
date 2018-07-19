const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

const { checkOk } = request;

describe('Weapons API', () => {

    beforeEach(() => dropCollection('weapons'));

    function save(weapon) {
        return request
            .post('/api/weapons')
            .send(weapon)
            .then(checkOk)
            .then(({ body }) => body);
    }

    let excalibur;
    beforeEach(() => {
        return save({ 
            name: 'Excalibur',
            type: 'sword',
            damage: 20 
        })
            .then(data => {
                excalibur = data;
            });
    });

    it('saves a weapon', () => {
        assert.isOk(excalibur._id);
    });

    it('gets a weapon by id', () => {
        return request
            .get(`/api/weapons/${excalibur._id}`)
            .then(({ body }) => {
                assert.deepEqual(body, excalibur);
            });
    });

    it('gets a list of weapons', () => {
        let rusty;
        return save({ 
            name: 'Rusty',
            type: 'axe',
            damage: 10  
        })
            .then(_rusty => {
                rusty = _rusty;
                return request.get('/api/weapons');
            })
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [excalibur, rusty]);
            });
    });

    it('updates a weapon', () => {
        excalibur.damage = 25;
        return request
            .put(`/api/weapons/${excalibur._id}`)
            .send(excalibur)
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, excalibur);
            });
    });

    it('removes a weapon', () => {
        return request
            .delete(`/api/weapons/${excalibur._id}`)
            .then(checkOk)
            .then(res => {
                assert.deepEqual(res.body, { removed: true });
                return request.get('/api/weapons');
            })
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, []);
            });
    });

});
