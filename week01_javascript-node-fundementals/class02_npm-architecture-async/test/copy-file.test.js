const assert = require('assert');
const { unlink, readFile } = require('../lib/fs');
const path = require('path');
const copyFile = require('../lib/copy-file');

describe('copy file', () => {
    
    const sourceFileName = 'data.txt';
    const destFileName = 'copy.txt';
    const dest = path.join(__dirname, 'copy-file-dir', destFileName);
    
    beforeEach(() => {
        return unlink(dest)
            .catch(err => {
                if(err.code !== 'ENOENT') throw err;
            });
    });

    it('copies from source to destination', () => {
        const source = path.join(__dirname, 'copy-file-dir', sourceFileName);
        
        return copyFile(source, dest)
            .then(() => {
                return readFile(dest);
            })
            .then(contents => {
                assert.equal(contents, 'I am some data');
            });
    });
});