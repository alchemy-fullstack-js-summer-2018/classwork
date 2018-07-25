const connect = require('../lib/util/connect');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const Restaurant = mongoose.model('Restaurant', {});

connect('mongodb://localhost:27017/aggregation');

Restaurant.aggregate([
    {
        $unwind: '$grades'
    },
    {
        $group: {
            _id: '$borough',
            name: { $first: '$name' },
            average: { $avg: '$grades.score' },
            count: { $sum: 1 },
            min: { $min: '$grades.score' },
            max: { $max: '$grades.score' }, 
        }
    },
    {
        $match: { count: { $gt: 1 } }
    },
    {
        $sort: { count: -1 }
    }
    
])
    .then(boroughs => {
        console.log(boroughs)
    }, console.log)
    .then(() => mongoose.connection.close());

