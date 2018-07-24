const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
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
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Pirate', schema);