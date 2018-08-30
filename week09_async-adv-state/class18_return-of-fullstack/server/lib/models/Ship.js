const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types');

const schema = new Schema({
    name: RequiredString,
    sails: {
        type: Number,
        required: true,
        min: 1
    },
    features: [String]
}, {
    // This feature adds createAt and updatedAt timestamps:
    // timestamps: true
});

module.exports = mongoose.model('Ship', schema);