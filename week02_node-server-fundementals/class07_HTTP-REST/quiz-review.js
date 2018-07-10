/*
Write a tested (mocha unit tested) library function (a function exported from 
a module/file) that takes an array of numbers (you can assume valid input) 
and returns a new array that contains the square (n * n, or Math.pow(n, 2)) 
of all of the odd input numbers, but only those squares that are greater 
than 24.

Test Case:

Input	                Output
[2, 3, 9, 12, 8, 5, 7]	[81, 25, 49]
*/

/* big-odd-squares.js */
// const bigOddSquares = numbers => numbers
//     .filter(n => n % 2 === 1)
//     .map(n => n * n)
//     .filter(n => n > 24);

/* big-odd-squares.test.js */
const assert = require('assert');

// it('squares odd numbers and returns those greater than 24', () => {
//     assert.deepEqual(bigOddSquares([2, 3, 9, 12, 8, 5, 7]), [81, 25, 49]);
// });

const bigOddSquares = numbers => numbers
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .filter(n => n > 24);

it('squares odd numbers and returns those greater than 24', () => {
    assert.deepEqual(bigOddSquares([2, 3, 9, 12, 8, 5, 7]), [81, 25, 49]);
});


