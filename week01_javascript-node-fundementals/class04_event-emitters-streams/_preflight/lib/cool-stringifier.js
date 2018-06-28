const fs = require('fs');

class CoolStringifier {
    constructor(filename) {
        this.readStream = fs.createReadStream(filename, {
            encoding: 'utf8',
            highWaterMark: 256
        });
    }

    transform(transformation, outputFileName) {
        const { readStream } = this;
        const writeStream = fs.createWriteStream(outputFileName);

        return new Promise((resolve, reject) => {
            let leftOvers = '';

            readStream.on('data', chunk => {
                chunk = leftOvers + chunk;
                leftOvers = '';

                const lastIndex = chunk.lastIndexOf(' ');
                
                if(lastIndex === -1) {
                    // edge case, *sigh*
                    leftOvers += chunk;
                }
                else {
                    if(lastIndex !== chunk.length - 1) {
                        leftOvers = chunk.slice(lastIndex);
                        chunk = chunk.slice(0, lastIndex);
                    }
                    writeStream.write(transformation(chunk));
                }
            });
    
            readStream.on('close', () => {
                if(leftOvers) writeStream.write(transformation(leftOvers));
                
                // okay, time to tell caller we are done
                writeStream.end(resolve);
            });

            readStream.on('error', reject);

        });
    }
}

/*
// pseudo example for create "static" method
CoolStringifier.create = function(filename) {
    callheaderFunction()
        .then(header => {
            return new CoolStringifier(filename, header);
        });
};

// use like:
CoolStringifier.create('./somefile.txt')
    .then(cool => {

    });
*/
module.exports = CoolStringifier;