const assert = require('assert');
const { unlink, readFile } = require('../lib/fs');
const path = require('path');
const copyFile = require('../lib/copy-file');

describe('copy file', () => {
    
    const testDir = path.join(__dirname, 'copy-file-dir');
    const sourceFileName = 'source.txt';
    const destFileName = 'copy.txt';
    const source = path.join(testDir, sourceFileName);
    const dest = path.join(testDir, destFileName);
    
    beforeEach(() => {
        return unlink(dest)
            .catch(err => {
                if(err.code !== 'ENOENT') throw err;
            });
    });

    it('copies from source to destination', () => {
        return copyFile(source, dest)
            .then(() => {
                return readFile(dest);
            })
            .then(contents => {
                assert.equal(contents, 'I am some data');
            });
    });
});