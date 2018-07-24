const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

const { checkOk } = request;

describe('Pirates API', () => {

    beforeEach(() => Promise.all([
        dropCollection('pirates'),
        dropCollection('users')
    ]));

    let token;
    beforeEach(() => {
        return request
            .post('/api/auth/signup')
            .send({
                email: 'me@me.com',
                password: 'abc'
            })
            .then(checkOk)
            .then(({ body }) => {
                token = body.token;
            });
    });

    function save(pirate) {
        return request
            .post('/api/pirates')
            .set('Authorization', token)
            .send(pirate)
            .then(checkOk)
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
            .set('Authorization', token)
            .then(({ body }) => {
                assert.deepEqual(body, luffy);
            });
    });

    it('gets a list of pirates', () => {
        let zoro;
        return save({ name: 'Ronona Zoro' })
            .then(_zoro => {
                zoro = _zoro;
                return request
                    .get('/api/pirates')
                    .set('Authorization', token);
            })
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [luffy, zoro]);
            });
    });

    it('updates a pirate', () => {
        luffy.name = 'Monkey D. Luffy';
        return request
            .put(`/api/pirates/${luffy._id}`)
            .set('Authorization', token)
            .send(luffy)
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, luffy);
            });
    });

    it('removes a pirate', () => {
        return request
            .delete(`/api/pirates/${luffy._id}`)
            .set('Authorization', token)
            .then(checkOk)
            .then(res => {
                assert.deepEqual(res.body, { removed: true });
                return request
                    .get('/api/pirates')
                    .set('Authorization', token);
            })
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, []);
            });
    });

    function addWeapon(pirate, weapon) {
        return request
            .post(`/api/pirates/${pirate._id}/weapons`)
            .set('Authorization', token)
            .send(weapon)
            .then(checkOk)
            .then(({ body }) => body);
    }

    it('adds a weapon to a pirate', () => {
        const fist = {
            name: 'Rubber Fists',
            type: 'punch',
            damage: 18
        };

        return addWeapon(luffy, fist)
            .then(weapon => {
                assert.isDefined(weapon._id);
                assert.equal(weapon.name, fist.name);
            });
    });

    it('removes a weapon from a pirate', () => {
        const fist = {
            name: 'Rubber Fists',
            type: 'punch',
            damage: 18
        };

        return addWeapon(luffy, fist)
            .then(weapon => {
                return request
                    .delete(`/api/pirates/${luffy._id}/weapons/${weapon._id}`)
                    .set('Authorization', token);
            })
            .then(checkOk)
            .then(() => {
                return request
                    .get(`/api/pirates/${luffy._id}`)
                    .set('Authorization', token);
            })
            .then(checkOk)
            .then(({ body }) => {
                assert.equal(body.weapons.length, 0);
            });
    });
});
