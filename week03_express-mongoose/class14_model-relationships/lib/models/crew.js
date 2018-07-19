const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    flag: String,
    weapons: [{
        weapon: {
            type: Schema.Types.ObjectId,
            ref: 'Weapon'
        },
        stolen: {
            type: Schema.Types.ObjectId,
            ref: 'Crew'
        },
        cursed: {
            type: Boolean,
            default: false
        }
    }]
});

module.exports = mongoose.model('Crew', schema);