const mongo = require('../mongodb');
const { ObjectId } = require('mongodb');

const Pirates = mongo.then(db => db.collection('pirates'));

module.exports = {
    insert(pirate) {
        return Pirates.then(pirates => pirates
            .insertOne(pirate)
            .then(result => result.ops[0]));   
    },
    find(query) {
        return Pirates.then(pirates => pirates
            .find(query)
            .toArray());
    },
    findOne(id) {
        return Pirates.then(pirates => pirates
            .findOne({ _id: ObjectId(id) })
            .then(result => result));
    },
    update(pirate) {
        const id = pirate._id;
        delete pirate._id;

        return Pirates.then(pirates => pirates
                .findOneAndUpdate({
                    _id: ObjectId(id)
                }, 
                { 
                    $set: pirate
                },
                {
                    returnOriginal: false
                })
                .then(result => result.value));
    },
    remove(id) {
        return Pirates.then(pirates => pirates
            .removeOne({
                _id: ObjectId(id)
            }));
    }
};