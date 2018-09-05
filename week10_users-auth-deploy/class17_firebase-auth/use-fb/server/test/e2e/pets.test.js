const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;
const { getToken } = require('./db');

describe('<Resource Name Here> API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    let token;
    beforeEach(() => {
        return getToken().then(t => token = t);
    });

    it('gets some pets', () => {
        return request.get('/api/pets')
            .set('Authorization', token)
            .then(({ body }) => {
                assert(body);
            });
    });

    it('gets some more pets', () => {
        return request.get('/api/pets')
            .set('Authorization', token)
            .then(({ body }) => {
                assert(body);
            });
    });


});