const { assert } = require('chai');
const cats = require('../lib/cats');

describe('get cats', () => {

    it('gets all cats with no args', () => {
        assert.deepEqual(cats(), [{
            name: 'garfield',
            type: 'orange tabby'
        }, {
            name: 'marie',
            type: 'artistocat'
        }, {
            name: 'duchess',
            type: 'artistocat'
        }, {
            name: 'felix',
            type: 'tuxedo'
        }]);
    });

    it('gets specific cat', () => {
        assert.deepEqual(cats('duchess'), {
            name: 'duchess',
            type: 'artistocat'
        });
    });

    it('return null if cat not recognized', () => {
        assert.isNull(cats('bad'));
    });
});