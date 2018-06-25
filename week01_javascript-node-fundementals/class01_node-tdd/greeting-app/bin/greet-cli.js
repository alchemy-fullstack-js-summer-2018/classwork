const greet = require('../lib/greet');
const getArgs = require('./get-args');

const name = getArgs(process.argv.slice(2));
const greeting = greet(name);
console.log(greeting);
