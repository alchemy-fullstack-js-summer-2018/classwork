const { assert } = require('chai');
const Ship = require('../../lib/models/Ship');
const { getErrors } = require('./helpers');

describe('Ship model', () => {

    it('valid good model', () => {
        const data = {
            name: 'Sunny',
            sails: 4,
            features: ['submarine', 'lazer cannon'],
        };

        const ship = new Ship(data);
        data._id = ship._id;
        assert.deepEqual(ship.toJSON(), data);
        assert.isUndefined(ship.validateSync());
    });

    it('required fields', () => {
        const ship = new Ship({});
        const errors = getErrors(ship.validateSync(), 2);
        assert.equal(errors.name.kind, 'required');
        assert.equal(errors.sails.kind, 'required');
    });
});