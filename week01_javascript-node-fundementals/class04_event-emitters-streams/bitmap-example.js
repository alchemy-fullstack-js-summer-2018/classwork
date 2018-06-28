

class StreamingBitmapTransformer {
    constructor(filePath, header) {
        this.filePath = filePath;
        this.header = header;
    }

    transform() {

    }
}

StreamingBitmapTransformer.create = function(bitmapFilepath) {
    return getBitmapHeader(bitmapFilepath)
        .then(bitmapHeader => {
            return new StreamingBitmapTransformer(bitmapFilePath, bitmapHeader);
        });
};

module.exports = StreamingBitmapTransformer;

// way we would use this:

StreamingBitmapTransformer.create('some-bitmap-file.bmp')
    .then(bitmapTransformer => {
        // now call .transform
        bitmapTransformer.transform(grayscale, 'grayscale-file.bmp')
            .then(() => console.log('all done!'));
    });