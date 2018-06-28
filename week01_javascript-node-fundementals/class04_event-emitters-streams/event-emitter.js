const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('banana', count => console.log(count, 'bananas!'));

ee.emit('banana', 23);