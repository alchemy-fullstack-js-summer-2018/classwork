const assert = require('assert');
const processMessage = require('../lib/processMessage');

describe('shout message', () => {

    it('shouts when message starts with !', () => {
        assert.equal(processMessage('!hello world'), 'HELLO WORLD');
    });

    it('no shouting when message does not start with !', () => {
        assert.equal(processMessage('hello world'), 'hello world');
    });
});