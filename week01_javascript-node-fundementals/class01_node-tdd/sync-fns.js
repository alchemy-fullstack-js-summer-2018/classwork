
const numbers = [1, 3, 6, 34];

console.log('before map');

const squares = numbers.map(n => {
    console.log('squaring', n);
    return n;
});

console.log('after map');