const assert = require('assert');
const { readFile /*, writeFile */ } = require('fs').promises;
const { join } = require('path');
const { effit } = require('../lib/effin-file');

describe('effin file', () => {

    const source = join(__dirname, 'TEST.md');
    const expected = join(__dirname, 'EXPECTED.md');

    let buffer;
    beforeEach(() => {
        return readFile(source)
            .then(b => buffer = b);
    });

    it('replaces Bb\'s with Ff\'s', () => {
        effit(buffer);

        // test it:
        readFile(expected)
            .then(standard => {
                assert.deepEqual(buffer, standard);
            });

        // let's just inspect the result:
        // writeFile(expected), buffer);
    });
});