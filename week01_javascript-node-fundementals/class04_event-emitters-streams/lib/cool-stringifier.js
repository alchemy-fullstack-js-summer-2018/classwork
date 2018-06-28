const fs = require('fs');

class CoolStringifier {
    constructor(filename) {
       this.filename;
    }

    transform(transformation, outputFileName) {
        const writeStream = fs.createWriteStream(outputFileName);
        const readStream = fs.createReadStream(this.filename, {
            encoding: 'utf8',
            highWaterMark: 256
        });

        return new Promise((resolve, reject) => {
            let leftOvers = '';

            readStream.on('data', chunk => {
                chunk = leftOvers + chunk;
                leftOvers = '';
                const lastIndex = chunk.lastIndexOf(' ');

                if(lastIndex === chunk.length - 1) {
                    // good to go! ship it!
                }
                else if(lastIndex === -1) {
                    // we don't know what to do, wait for next chunk...
                    leftOvers = chunk;
                    return;
                }
                else {
                    // last index is in middle chunk
                    leftOvers = chunk.slice(lastIndex + 1)
                    chunk = chunk.slice(0, lastIndex + 1);
                }

                const changed = transformation(chunk);
                writeStream.write(changed);
            });

            readStream.on('end', chunk => {
                if(leftOvers) {
                    const changed = transformation(leftOvers);
                    writeStream.write(changed);               
                }
                writeStream.end(resolve);
            });

            readStream.on('error', reject);

        });
    }
}

module.exports = CoolStringifier;