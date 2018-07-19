const { assert } = require('chai');
const { getErrors } = require('./helpers');
const Pirate = require('../../lib/models/pirate');

describe('Pirate model', () => {

    it('validates good model', () => {
        const data = {
            name: 'Ronona',
            weapons: [{
                name: 'Wado Ichimonji',
                type: 'sword',
                damage: 22
            }, {
                name: 'Shusui',
                type: 'sword',
                damage: 21
            }, {
                name: 'Sandai Kitetsu',
                type: 'sword',
                damage: 21
            }]
        };

        const pirate = new Pirate(data);

        const json = pirate.toJSON();
        delete json._id;
        json.weapons.forEach(w => delete w._id);
        assert.deepEqual(json, data);
        assert.isUndefined(pirate.validateSync());
    });

    it('name is required', () => {
        const pirate = new Pirate({});
        const errors = getErrors(pirate.validateSync(), 1);
        assert.equal(errors.name.kind, 'required');  
    });

    it('weapons validation', () => {
        const pirate = new Pirate({
            name: 'pirate',
            weapons: [{}]
        });

        const errors = getErrors(pirate.validateSync(), 3);
        // use this to inspect!
        // assert.deepEqual(errors, {});
        assert.equal(errors['weapons.0.name'].kind, 'required'); 
        assert.equal(errors['weapons.0.type'].kind, 'required'); 
        assert.equal(errors['weapons.0.damage'].kind, 'required'); 
    });
    // NOTE: mongoose won't validate multipl array items

    it('weapon damage min 1', () => {
        const pirate = new Pirate({
            name: 'pirate',
            weapons: [{
                name: 'weapon 1',
                type: 'sword',
                damage: 0
            }]
        });

        const errors = getErrors(pirate.validateSync(), 1);
        // use this to inspect!
        // assert.deepEqual(errors, {});
        assert.equal(errors['weapons.0.damage'].kind, 'min'); 
    });

    it('weapon damage max 25', () => {
        const pirate = new Pirate({
            name: 'pirate',
            weapons: [{
                name: 'weapon 1',
                type: 'sword',
                damage: 26
            }]
        });

        const errors = getErrors(pirate.validateSync(), 1);
        assert.equal(errors['weapons.0.damage'].kind, 'max'); 
    });


});