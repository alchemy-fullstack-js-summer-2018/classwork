const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

rl.on('line', input => {
    console.log('received input', input);
    rl.prompt();
});

setInterval(() => {
    console.log('simulated server message');
}, 2500);
