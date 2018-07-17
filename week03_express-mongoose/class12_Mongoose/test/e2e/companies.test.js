const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Companies API', () => {

    beforeEach(() => dropCollection('companies'));

    let company;

    beforeEach(() => {
        const data = {
            name: 'Company',
            address: { state: 'OR' },
            rating: 2
        };

        return request
            .post('/api/companies')
            .send(data)
            .then(({ body }) => company = body);
    });

    it('saves a company', () => {
        assert.isOk(company._id);
    });
});