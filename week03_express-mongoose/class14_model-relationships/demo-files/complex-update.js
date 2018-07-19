const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
const { Types } = mongoose;

const Tour = mongoose.model('Tour', new mongoose.Schema({
    name: String,
    stops: [{
        attendence: Number
    }]
}));

// Tour.create({
//     stops: [
//         { attendence: 50 },
//         { attendence: 60 },
//         { attendence: 70 }
//     ]
// })
//     .catch(console.log)
//     .then(() => mongoose.connection.close());

// Tour.findByIdAndUpdate(
//     '5b50f0b3a8be8da7b235f701',
//     {
//         $set: {
//             // name: 'A Tour'
//             'stops.5': {
//                 attendence: 50
//             }
//         }
//     }
// )
//     .catch(console.log)
//     .then(() => mongoose.connection.close());

Tour.findById('5b50f0b3a8be8da7b235f701')
    .then(tour => {
        console.log(tour.stops);
        const stop = tour.stops.find(s => s && s._id == '5b50f1dda6889da8cef375b3');
        console.log('found', stop);
        // TODO: check if stop is empty
        stop.attendence = 100;
        return tour.save();
    })
    .catch(console.log)
    .then(() => mongoose.connection.close());