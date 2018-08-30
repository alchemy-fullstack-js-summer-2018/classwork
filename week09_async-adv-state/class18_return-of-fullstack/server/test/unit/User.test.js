const { assert } = require('chai');
const User = require('../../lib/models/User');

describe('User model', () => {

    const data = {
        email: 'me@me.com'
    };
    
    const password = 'abc';

    let user = null;
    beforeEach(() => {
        user = new User(data);
        user.generateHash(password);
    });

    it('generates hash from password', () => {
        assert.ok(user.hash);
        assert.notEqual(user.hash, password);
    });

    it('compares password to hash', () => {
        assert.isOk(user.comparePassword(password));
    });
});