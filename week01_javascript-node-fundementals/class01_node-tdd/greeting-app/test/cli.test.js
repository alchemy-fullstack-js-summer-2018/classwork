const execSync = require('child_process').execSync;
const assert = require('assert');

describe('e2e test', () => {
    it('greets by name', () => {
        const output = execSync('node bin/greet-cli.js world');
        assert.equal(output.toString(), 'hello world\n');
    });
});