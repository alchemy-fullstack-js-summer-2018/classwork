const getArgs = require('../bin/get-args');
const assert = require('assert');

describe('cli args', () => {
    it('gets name', () => {
        const name = getArgs(['sally']);
        assert.equal(name, 'sally');
    });
});