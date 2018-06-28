const assert = require('assert');
const CoolStringifier = require('../lib/cool-stringifier');
const { shout, reverseWords } = require('../lib/transformers');
const fs = require('fs');
const { unlink } = fs.promises;

const readText = file => fs.readFileSync(file, 'utf8');

describe('cool stringifier', () => {

    const actualFile = './test/hipster-reverse.txt';

    beforeEach(() => {
        return unlink(actualFile)
            .catch(err => {
                if(err.code !== 'ENOENT') throw err; 
            });
    });

    let cool = null;
    beforeEach(() => {
        cool = new CoolStringifier('./test/hipster-ipsum.txt');
    });

    it('shouts file', () => {
        //                  transformFn   outputPath
        return cool.transform(reverseWords, actualFile)
            .then(() => {
                const actual = readText(actualFile);
                const expected = readText('./test/hipster-reverse-expected.txt');
                assert.equal(actual, expected);
            });
        
    });

});