const assert = require('assert');
const CoolStringifier = require('../lib/cool-stringifier');
const { shout, reverseWords } = require('../lib/transformers');
const { promisify } = require('util');
const unlink = promisify(require('fs').unlink);
const fs = require('fs');

const readText = file => fs.readFileSync(file, 'utf8');

describe('cool stringifier', () => {

    const actualShoutFile = './test/hipster-shouting.txt';
    const actualReverseFile = './test/hipster-reverse.txt';

    beforeEach(() => {
        return unlink(actualShoutFile)
            .catch(err => {
                if(err.code !== 'ENOENT') throw err; 
            });
    });

    beforeEach(() => {
        return unlink(actualReverseFile)
            .catch(err => {
                if(err.code !== 'ENOENT') throw err; 
            });
    });

    let cool = null;
    beforeEach(() => {
        cool = new CoolStringifier('./test/hipster-ipsum.txt');
    });

    it('shouts file', () => {
        return cool.transform(shout, actualShoutFile)
            .then(() => {
                const actual = readText(actualShoutFile);
                const expected = readText('./test/hipster-shouting-expected.txt');
                assert.deepEqual(actual, expected);
            });
        
    });

    it('reverses words', () => {
        return cool.transform(reverseWords, actualReverseFile)
            .then(() => {
                const actual = readText(actualReverseFile);
                const expected = readText('./test/hipster-reverse-expected.txt');
                assert.deepEqual(actual, expected);
            });
    });

});