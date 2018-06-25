const assert = require('assert');
const greet = require('../lib/greet');

describe('greet', () => {
    
    it('says hello to provided name', () => {
        const greeting = greet('world');
        assert.equal(greeting, 'hello world');
    });

    it('says hello stranger when no name provided', () => {
        const greeting = greet();
        assert.equal(greeting, 'hello stranger');
    });

    it('takes an optional salutation', () => {
        const greeting = greet('world', { salutation: 'hola' });
        assert.equal(greeting, 'hola world');
    });

    it('uppercases on option shout true', () => {
        const greeting = greet('world', { shout: true });
        assert.equal(greeting, 'HELLO WORLD');
    });
});
