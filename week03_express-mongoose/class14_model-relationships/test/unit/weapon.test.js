const { assert } = require('chai');
const { getErrors } = require('./helpers');
const Weapon = require('../../lib/models/weapon');

describe('Weapon model', () => {

    it('validates good model', () => {
        const data = {
            name: 'Wado Ichimonji',
            type: 'sword',
            damage: 22
        };

        const weapon = new Weapon(data);

        const json = weapon.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(weapon.validateSync());
    });

    it('name, type, and damage are required', () => {
        const weapon = new Weapon({});
        const errors = getErrors(weapon.validateSync(), 3);
        assert.equal(errors.name.kind, 'required');  
        assert.equal(errors.type.kind, 'required');  
        assert.equal(errors.damage.kind, 'required');  
    });

    it('weapon damage min 1', () => {
        const weapon = new Weapon({
            name: 'weapon 1',
            type: 'sword',
            damage: 0
        });

        const errors = getErrors(weapon.validateSync(), 1);
        assert.equal(errors['damage'].kind, 'min'); 
    });

    it('weapon damage max 25', () => {
        const weapon = new Weapon({
            name: 'weapon 1',
            type: 'sword',
            damage: 26
        });

        const errors = getErrors(weapon.validateSync(), 1);
        assert.equal(errors['damage'].kind, 'max'); 
    });


});