const mongo = require('../mongodb');

module.exports = {
    insert(pirate) {
        return mongo.then(db => {
            return db.collection('pirates')
                .insert(pirate)
                .then(result => result.ops[0]);
        });   
    },
    find() {
        return mongo.then(db => {
            return db.collection('pirates')
                .find()
                .toArray();
        });
    }
};