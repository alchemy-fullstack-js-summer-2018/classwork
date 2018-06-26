const { join } = require('path');
const { readdir, mkdirp } = require('./fs');
const copyFile = require('./copy-file');

module.exports = function copyDir(source, dest) {
    return Promise.all([
        // #1a) Get list files in directory
        readdir(source),
        // #1b) Make the new directory
        mkdirp(dest)
    ])
        .then(([files]) => {
            // #2(0...n) For each file from #1a, call copyFile
            return Promise.all(files.map(file => {
                return copyFile(join(source, file), join(dest, file));
            }));
        });
};



// .then(([files]) => {
//     // #2(0...n) For each file from #1a, call copyFile
//     const arrayOfPromises = files.map(file => {
//         const sourceFile = join(source, file);
//         const destFile = join(dest, file);
//         return copyFile(sourceFile, destFile);
//     });

//     return Promise.all(arrayOfPromises);
    
// })