const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: String,
    type: String,
    favoriteToys: [String]
});

module.exports = mongoose.model('Pet', schema);