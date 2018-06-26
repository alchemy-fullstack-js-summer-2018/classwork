const assert = require('assert');
const CoolStringifier = require('../lib/cool-stringifier');

describe.only('cool stringifier', () => {

    let cool = null;

    beforeEach(() => {
        cool = new CoolStringifier('I am cool');
    });

    it('reverses word orders', () => {
        cool.reverseWordOrder();
        assert.equal(cool.sentence, 'cool am I');
    });

    it('reverses letter order of each word', () => {
        cool.reverseWordLetters();
        assert.equal(cool.sentence, 'I ma looc');
    });

    it('upper cases when shouting', () => {
        cool.shout();
        assert.equal(cool.sentence, 'I AM COOL');
    });

    it('allow multiple transforms', () => {
        const cool = new CoolStringifier('I am cool');
        cool.reverseWordOrder();
        cool.shout();
        assert.equal(cool.sentence, 'COOL AM I');
    });

    it('allows chaining', () => {
        const cool = new CoolStringifier('I am cool');
        cool
            .reverseWordLetters()
            .reverseWordOrder()
            .shout();
        
        assert.equal(cool.sentence, 'LOOC MA I');
    });
});