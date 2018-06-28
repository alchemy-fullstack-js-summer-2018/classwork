const { open, read } = require('fs').promises;

function readFrom(file, length, position = 0) {
    const buffer = Buffer.alloc(length);
    
    return open(file, 'r')
        // fd === "file descriptor"
        .then(fd => read(fd, buffer, 0, length, position))
        .then(contents => contents.buffer);
}

module.exports = readFrom;



// use as so:

const file = './test/hipster-ipsum.txt';
const length = 50;
const position = 5;

readFrom(file, length, position).then(buffer => console.log(buffer.toString()));
