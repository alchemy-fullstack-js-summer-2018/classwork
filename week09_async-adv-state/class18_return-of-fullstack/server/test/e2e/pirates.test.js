const { assert } = require('chai');
const request = require('./request');
const { dropCollection, createToken } = require('./db');

describe('Pirate API', () => {

    before(() => dropCollection('pirates'));
    before(() => dropCollection('crews'));
    before(() => dropCollection('users'));

    let token = '';
    before(() => createToken().then(t => token = t));

    let strawHats = {
        name: 'Straw Hats'
    };

    before(() => {
        return request.post('/api/crews')
            .set('Authorization', token)
            .send(strawHats)
            .then(({ body }) => {
                strawHats = body;
            });
    });

    let luffy = {
        name: 'Monkey D. Luffy',
        role: 'captain',
        crew: 'Straw Hat Pirates',
        wardrobe: {
            shoes: 'flip-flops'
        },
        weapons: []
    };

    let zoro = {
        name: 'Roronoa Zoro',
        role: 'crew',
        crew: 'Straw Hats',
        wardrobe: {
            shoes: 'boots'
        },
        weapons: []
    };

    const checkOk = res => {
        if(!res.ok) throw res.error;
        return res;
    };

    it('saves a pirate', () => {
        luffy.crew = strawHats._id;
        return request.post('/api/pirates')
            .send(luffy)
            .then(checkOk)
            .then(({ body }) => {
                const { _id, __v, joined } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.ok(joined);
                assert.deepEqual(body, {
                    _id, __v, joined,
                    ...luffy
                });
                luffy = body;
            });
    });

    it('gets a pirate by id', () => {
        zoro.crew = strawHats._id;

        return request.post('/api/pirates')
            .send(zoro)
            .then(checkOk)
            .then(({ body }) => {
                zoro = body;
                return request.get(`/api/pirates/${zoro._id}`);
            })
            .then(({ body }) => {
                assert.deepEqual(body, {
                    ...zoro,
                    crew: {
                        _id: strawHats._id, name: strawHats.name
                    }
                });
            });
    });

    it('update a pirate', () => {
        zoro.role = 'first sword';

        return request.put(`/api/pirates/${zoro._id}`)
            .send(zoro)
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, zoro);
                return request.get(`/api/pirates/${zoro._id}`);
            })
            .then(({ body }) => {
                assert.equal(body.role, zoro.role);
            });
    });

    const getFields = ({ _id, name, role }) => {
        return { 
            _id, name, role, 
            crew: {
                _id: strawHats._id, name: strawHats.name
            } 
        };
    };

    it('gets all pirates', () => {
        return request.get('/api/pirates')
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [luffy, zoro].map(getFields));
            });
    });

    it('queries pirates', () => {
        return request.get('/api/pirates?role=captain')
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [luffy].map(getFields));
            });
    });

    it('deletes a pirate', () => {
        return request.delete(`/api/pirates/${zoro._id}`)
            .then(() => {
                return request.get(`/api/pirates/${zoro._id}`);
            })
            .then(res => {
                assert.equal(res.status, 404);
            });
    });

    it('returns 404 on get of non-existent id', () => {
        return request.get(`/api/pirates/${zoro._id}`)
            .then(response => {
                assert.equal(response.status, 404);
                assert.match(response.body.error, new RegExp(zoro._id));
            });
    });

    describe('Pirate Weapons API', () => {

        const weapon = { type: 'kick', damage: 13 };

        it('Adds a weapon', () => {
            return request.post(`/api/pirates/${luffy._id}/weapons`)
                .send(weapon)
                .then(checkOk)
                .then(({ body }) => {
                    assert.isDefined(body._id);
                    weapon._id = body._id;
                    assert.deepEqual(body, weapon);

                    return request.get(`/api/pirates/${luffy._id}`);
                })
                .then(({ body }) => {
                    assert.deepEqual(body.weapons, [weapon]);
                });
        });

        it('Updates a weapon', () => {
            weapon.damage = 16;
            return request.put(`/api/pirates/${luffy._id}/weapons/${weapon._id}`)
                .send(weapon)
                .then(checkOk)
                .then(({ body }) => {
                    assert.equal(body.damage, weapon.damage);
                });
        });

        it('Removes a weapon', () => {
            return request.delete(`/api/pirates/${luffy._id}/weapons/${weapon._id}`)
                .then(checkOk)
                .then(() => {
                    return request.get(`/api/pirates/${luffy._id}`);                    
                })
                .then(({ body }) => {
                    assert.deepEqual(body.weapons, []);
                });
        });
    });
});