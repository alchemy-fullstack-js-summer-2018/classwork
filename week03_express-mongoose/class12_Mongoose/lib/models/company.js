const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        city: String,
        state: {
            type: String,
            required: true
        }
    },
    founded: Date,
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    size: {
        type: String,
        enum: ['small', 'medium', 'large']
    },
    cool: {
        type: Boolean,
        default: false
    },
    featuring: [String]
});

module.exports = mongoose.model('Company', schema);