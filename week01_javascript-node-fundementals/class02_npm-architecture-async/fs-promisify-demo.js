const fs = require('fs');
const promisify = require('util').promisify;

fs.readFile('foo.txt', 'utf8', (err, result) => {
    if(err) console.log('old school error', err);
    else console.log('old school node callback', result);
});

const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);

readFile('foo.txt', 'utf8')
    .then(
        result => {
            console.log('promisified readFile', result);
        },
        err => {
            console.log('promisified error', err);
        }
    )

readdir('.')
    .then(files => console.log(files));
