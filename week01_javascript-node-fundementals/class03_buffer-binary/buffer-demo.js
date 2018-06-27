const { readFile, writeFile } = require('fs').promises;


const getChar = char => char.charCodeAt(0);

const charB = getChar('B');
const charb = getChar('b');
const charF = getChar('F');
const charf = getChar('f');

readFile('README.md')
    .then(buffer => {
        for(let i = 0; i < buffer.length; i++) {
            const number = buffer.readInt8(i);
            if(number === charB) buffer.writeInt8(charF, i);
            else if(number === charb) buffer.writeInt8(charf, i);
        }

        return writeFile('EDITME.md', buffer);
    })
    .then(() => {
        console.log('eff\'n file written!');
    })
    .catch(err => {
        console.log('***ERROR:\n', err);
    });

