const fs = require('fs');

const readStream = fs.createReadStream('./test/hipster-ipsum.txt', {
    encoding: 'utf8',
    highWaterMark: 256
});

const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream);