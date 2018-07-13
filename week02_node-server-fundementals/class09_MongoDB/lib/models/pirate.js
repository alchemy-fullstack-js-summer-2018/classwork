const mongo = require('../mongodb');
const { ObjectId } = require('mongodb');


module.exports = {
    insert(pirate) {
        return mongo.then(db => {
            return db.collection('pirates')
                .insertOne(pirate)
                .then(result => result.ops[0]);
        });   
    },
    find(query) {
        return mongo.then(db => {
            return db.collection('pirates')
                .find(query)
                .toArray();
        });
    },
    findOne(id) {
        return mongo.then(db => {
            return db.collection('pirates')
                .findOne({ _id: ObjectId(id) })
                .then(result => result);
        });
    },
    update(pirate) {
        const id = pirate._id;
        delete pirate._id;

        return mongo.then(db => {
            return db.collection('pirates')
                .findOneAndUpdate({
                    _id: ObjectId(id)
                }, 
                { 
                    $set: pirate
                },
                {
                    returnOriginal: false
                })
                .then(result => result.value);
        });
    },
    remove(id) {
        return mongo.then(db => {
            return db.collection('pirates')
                .removeOne({
                    _id: ObjectId(id)
                });
        });
    }
};