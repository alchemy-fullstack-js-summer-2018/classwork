const defaultGreeting = require('../lib/default-greeting');
const { assert } = require('chai');

describe('default greeting', () => {
    it('says hello world', () => {
        assert.equal(defaultGreeting(), 'hello world');
    });
    
    it('says custom saluation', () => {
        assert.equal(defaultGreeting('yo'), 'yo world');
    });
});
