const { assert } = require('chai');
const request = require('./request');
const { dropCollection, createToken } = require('./db');

describe('Ships API', () => {

    before(() => dropCollection('users'));
    before(() => dropCollection('ships'));

    let token = '';
    before(() => createToken().then(t => token = t));

    let sunny = {
        name: 'Sunny',
        sails: 5,
        features: ['hot tub']
    };

    let navy = {
        name: 'Navy Galleon',
        sails: 20,
        features: ['lots o\' guns']
    };

    const checkOk = res => {
        if(!res.ok) throw res.error;
        return res;
    };

    it('saves a ship', () => {
        return request.post('/api/ships')
            .set('Authorization', token)
            .send(sunny)
            .then(checkOk)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal(__v, 0);
                assert.deepEqual(body, {
                    ...sunny,
                    _id, __v 
                });
                sunny = body;
            });
    });

    it('gets a ship by id', () => {
        return request.post('/api/ships')
            .set('Authorization', token)
            .send(navy)
            .then(checkOk)
            .then(({ body }) => {
                navy = body;
                return request.get(`/api/ships/${navy._id}`)
                    .set('Authorization', token);
            })
            .then(({ body }) => {
                assert.deepEqual(body, navy);
            });
    });

    it('update a ship', () => {
        sunny.sails = 6;

        return request.put(`/api/ships/${sunny._id}`)
            .set('Authorization', token)
            .send(sunny)
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, sunny);
                return request.get(`/api/ships/${sunny._id}`)
                    .set('Authorization', token);
            })
            .then(({ body }) => {
                assert.deepEqual(body, sunny);
            });
    });

    const getFields = ({ _id, name }) => ({ _id, name });

    it('gets all ships but only _id and name', () => {
        return request.get('/api/ships')
            .set('Authorization', token)
            .then(checkOk)
            .then(({ body }) => {
                assert.deepEqual(body, [sunny, navy].map(getFields));
            });
    });

    it('deletes a ship', () => {
        return request.delete(`/api/ships/${navy._id}`)
            .set('Authorization', token)
            .then(() => {
                return request.get(`/api/ships/${navy._id}`)
                    .set('Authorization', token);
            })
            .then(res => {
                assert.equal(res.status, 404);
            });
    });

    it('returns 404 on get of non-existent id', () => {
        return request.get(`/api/ships/${navy._id}`)

            .set('Authorization', token)
            .then(response => {
                assert.equal(response.status, 404);
                assert.match(response.body.error, new RegExp(navy._id));
            });
    });

});