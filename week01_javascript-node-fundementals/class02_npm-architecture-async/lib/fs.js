const fs = require('fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const { promisify } = require('util');

module.exports = {
    readdir: promisify(fs.readdir),
    unlink: promisify(fs.unlink),
    readFile: promisify(fs.readFile),
    writeFile: promisify(fs.writeFile),
    rimraf: promisify(rimraf),
    mkdirp: promisify(mkdirp)
};
