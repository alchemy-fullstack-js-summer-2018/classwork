const assert = require('assert');
const { some } = require('../lib/array-methods');

describe('array methods', () => {

    
    describe('some', () => {

        const isEven = x => x % 2 === 0;

        describe('assumptions', () => {
    
            it('returns false if no matches', () => {
                const numbers = [1, 3, 5];
                const result = numbers.some(isEven);
                assert.equal(result, false);
            });

            it('returns true if at least one match', () => {
                const numbers = [1, 4, 5];
                const result = numbers.some(isEven);
                assert.equal(result, true);
            });

            it('short-circuits after first true match', () => {
                const numbers = [1, 4, 6];
                const called = [];
                numbers.some(n => {
                    called.push(n);
                    return isEven(n);
                });

                assert.deepEqual(called, [1, 4]);
            });
        });

        it('return false if no matches', () => {
            const numbers = [1, 3, 5];
            const result = some(numbers, isEven);
            assert.equal(result, false);
        });

        it('returns true if at least one match', () => {
            const numbers = [1, 4, 5];
            const result = some(numbers, isEven);
            assert.equal(result, true);
        });

        it('short-circuits after first true match', () => {
            const numbers = [1, 4, 6];
            const called = [];
            some(numbers, n => {
                called.push(n);
                return isEven(n);
            });

            assert.deepEqual(called, [1, 4]);
        });

    });
});
