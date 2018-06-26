const assert = require('assert');
const path = require('path');
const { rimraf, readdir } = require('../lib/fs');
const copyDir = require('../lib/copy-dir');

describe('copy directory', () => {

    const source = path.join(__dirname, 'source-dir');
    const dest = path.join(__dirname, 'copy-dir');
    
    beforeEach(() => {
        return rimraf(dest);
    });

    it('copies dir and files from source to dest', () => {
        return copyDir(source, dest)
            .then(() => {
                return Promise.all([
                    readdir(source),
                    readdir(dest)
                ]);
            })
            .then(([sourceFiles, destFiles]) => {
                assert.deepEqual(sourceFiles, destFiles);
            });
    });
});
