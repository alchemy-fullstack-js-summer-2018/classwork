const chai = require('chai');
const { assert } = chai;
const Company = require('../../lib/models/company');

const getErrors = (validation) => {
    assert.isDefined(validation, 'expected validation errors but no errors found');
    const { errors } = validation;
    assert.isDefined(errors);
    return errors;
};

describe('Company model', () => {

    it('validates good model', () => {
        const data = {
            name: 'Alchemy Code Lab'
        };

        const company = new Company(data);
        const json = company.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(company.validateSync());
    });

    it('errors on required fields', () => {
        const company = new Company({});
        const errors = getErrors(company.validateSync());
        assert.equal(Object.keys(errors).length, 1);
        assert.equal(errors.name.kind, 'required');
    });
});