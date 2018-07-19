const { assert } = require('chai');
const { getErrors } = require('./helpers');
const Crew = require('../../lib/models/crew');

describe('Crew model', () => {

    it('validates good model', () => {
        const data = {
            name: 'Straw Hat Pirates',
            flag: 'straw-hat-flag.png'
        };

        const crew = new Crew(data);

        const json = crew.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(crew.validateSync());
    });

    it('name is required', () => {
        const crew = new Crew({});
        const errors = getErrors(crew.validateSync(), 1);
        assert.equal(errors.name.kind, 'required');  
    });

});