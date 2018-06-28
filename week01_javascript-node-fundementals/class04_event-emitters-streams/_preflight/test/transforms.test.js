const assert = require('assert');
const { reverseWords, shout } = require('../lib/transformers');

describe('transforms', () => {

    const words = 'This is so cool';

    it('reverse each word', () => {
        assert.equal(reverseWords(words), 'sihT si os looc');
    });

    it('shout words', () => {
        assert.equal(shout(words), 'THIS IS SO COOL');
    });
});