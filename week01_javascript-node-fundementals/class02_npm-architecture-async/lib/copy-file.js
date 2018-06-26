const { readFile, writeFile } = require('./fs');

module.exports = function copyFile(source, dest) {
    return readFile(source)
        .then(contents => {
            return writeFile(dest, contents);
        });
};