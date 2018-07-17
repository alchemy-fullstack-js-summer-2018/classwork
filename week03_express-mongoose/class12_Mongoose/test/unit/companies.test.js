const chai = require('chai');
const { assert } = chai;
const Company = require('../../lib/models/company');

const getErrors = (validation, numberExpected) => {
    assert.isDefined(validation);
    const errors = validation.errors;
    assert.equal(Object.keys(errors).length, numberExpected);
    return errors;
};

describe('Company model', () => {

    it('validates good model', () => {
        const data = {
            name: 'Alchemy Code Lab',
            address: {
                city: 'Portland',
                state: 'OR'
            },
            rating: 5,
            founded: new Date(),
            cool: true,
            featuring: ['coding', 'happiness']
        };

        const company = new Company(data);

        const json = company.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(company.validateSync());
    });

    it('validates required fields', () => {
        const company = new Company({});
        const errors = getErrors(company.validateSync(), 3);
        assert.equal(errors.name.kind, 'required');
        assert.equal(errors['address.state'].kind, 'required');
        assert.equal(errors.rating.kind, 'required');    
    });

    it('rating is at least 1', () => {
        const company = new Company({
            name: 'Company',
            address: { state: 'OR' },
            rating: 0
        });

        const errors = getErrors(company.validateSync(), 1);
        assert.equal(Object.keys(errors).length, 1);
        assert.equal(errors.rating.kind, 'min');
    });

    it('rating is at most 5', () => {
        const company = new Company({
            name: 'Company',
            address: { state: 'OR' },
            rating: 6
        });

        const errors = getErrors(company.validateSync(), 1);
        assert.equal(errors.rating.kind, 'max');
    });

    it('limits size to small, medium or large', () => {
        const company = new Company({
            name: 'Company',
            address: { state: 'OR' },
            rating: 3,
            size: 'huge'
        });

        const errors = getErrors(company.validateSync(), 1);
        assert.equal(Object.keys(errors).length, 1);
        assert.equal(errors.size.kind, 'enum');
    });

    it('defaults coolness to false if not supplied', () => {
        const company = new Company({
            name: 'Company',
            address: { state: 'OR' },
            rating: 6
        });

        assert.strictEqual(company.cool, false);
    });

});