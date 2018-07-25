const mongoose = require('mongoose');
const { Schema } = mongoose;
const { averagesAllBoroughs, averagesOneBorough } = require('./restaurant-aggregations');

// this would have props for transaction model use...
const schema = new Schema({

});

schema.statics.averagesAllBoroughs = function() {
    return this.aggregate(averagesAllBoroughs());
};

schema.statics.averagesOneBorough = function(borough) {
    return this.aggregate(averagesOneBorough(borough));
};

module.exports = mongoose.model('Restaurant', schema);