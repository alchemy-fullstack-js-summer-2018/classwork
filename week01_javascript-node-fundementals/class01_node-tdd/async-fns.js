const fs = require('fs');

console.log('#1 before read file');

fs.readFile('async-fns.js', 'utf8', (err, data) => {
    console.log('#3 done reading file');
});

console.log('#2 after read file');
