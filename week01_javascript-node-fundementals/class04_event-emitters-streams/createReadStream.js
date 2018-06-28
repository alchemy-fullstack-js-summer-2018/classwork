const fs = require('fs');

const readStream = fs.createReadStream('./test/hipster-ipsum.txt', {
    encoding: 'utf8',
    highWaterMark: 256
});

const writeStream = fs.createWriteStream('copy.txt');

let total = 0;
readStream.on('data', chunk => {
    total += chunk.length;
    console.log('chunk', total, chunk.length, chunk.slice(0, 15));
    writeStream.write(chunk.toUpperCase());
});

readStream.on('close', () => {
    console.log('all done!');
    writeStream.end();
});