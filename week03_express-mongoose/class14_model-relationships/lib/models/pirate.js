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
        type: Schema.Types.ObjectId,
        ref: 'Weapon'    
    }]
});

module.exports = mongoose.model('Pirate', schema);