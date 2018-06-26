const fs = require('fs');
const { promisify } = require('util');

module.exports = {
    unlink: promisify(fs.unlink),
    readFile: promisify(fs.readFile),
    writeFile: promisify(fs.writeFile)
};
