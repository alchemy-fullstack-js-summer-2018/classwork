const mongo = require('../mongodb');
const { ObjectId } = require('mongodb');

const Pirates = mongo.then(db => db.collection('pirates'));

module.exports = {
    create(pirate) {
        return Pirates.then(pirates => pirates
            .insertOne(pirate)
            .then(result => result.ops[0]));   
    },
    find() {
        return Pirates.then(pirates => pirates
            .find()
            .toArray());
    },
    findById(id) {
        return Pirates.then(pirates => pirates
            .findOne({ _id: ObjectId(id) })
        );
    },
    // findByIdAndUpdate(id, pirate) {
    //     delete pirate._id;
    // return Pirates.then(pirates => pirates
    //     .findOneAndUpdate({
    //         _id: ObjectId(id)
    //     }, 
    //     { 
    //         $set: pirate
    //     },
    //     {
    //         returnOriginal: false
    //     })
    //     .then(result => result.value));
    // },
    // findByIdAndRemove(id) {
    //     return Pirates.then(pirates => pirates
    //         .removeOne({
    //             _id: ObjectId(id)
    //         }));
    // }
};