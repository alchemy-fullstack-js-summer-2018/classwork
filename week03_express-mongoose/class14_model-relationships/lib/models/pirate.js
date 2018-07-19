const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    crew: {
        type: Schema.Types.ObjectId,
        ref: 'Crew'
    },
    weapons: [{
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        damage: {
            type: Number,
            min: 1,
            max: 25,
            required: true
        }
    }]
});

module.exports = mongoose.model('Pirate', schema);