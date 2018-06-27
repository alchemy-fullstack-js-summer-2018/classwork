
const b = 'b'.charCodeAt(0);
const B = 'B'.charCodeAt(0);
const f = 'f'.charCodeAt(0);
const F = 'F'.charCodeAt(0);

function effit(buffer) {
    for(let i = 0; i < buffer.length; i++) {
        const byte = buffer.readInt8(i);
        if(byte === b) buffer.writeInt8(f, i);
        if(byte === B) buffer.writeInt8(F, i);
    }
}

module.exports = {
    effit
};