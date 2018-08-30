const { assert } = require('chai');
const { Types } = require('mongoose');
const Crew = require('../../lib/models/Crew');
const { getErrors } = require('./helpers');

describe('Crew model', () => {

    it('valid good model', () => {
        const data = {
            name: 'Straw Hats',
            flag: 'https://images-na.ssl-images-amazon.com/images/I/814tPeVWRDL._SL1500_.jpg',
            ships: [Types.ObjectId()],
        };

        const crew = new Crew(data);
        data._id = crew._id;
        assert.deepEqual(crew.toJSON(), data);
        assert.isUndefined(crew.validateSync());
    });

    it('required fields', () => {
        const pirate = new Crew({});
        const errors = getErrors(pirate.validateSync(), 1);
        assert.equal(errors.name.kind, 'required');
    });
});