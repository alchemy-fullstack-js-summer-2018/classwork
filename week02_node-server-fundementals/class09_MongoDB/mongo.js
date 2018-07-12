/* eslint no-console: off */
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectId } = require('mongodb');


const url = 'mongodb://localhost:27017/test';
let client = null;
MongoClient.connect(url)
    .then(_client => {
        client = _client;
        const db = client.db();
        return db.collection('unicorns')
            .find()        
            .toArray();
        // .insert({ name: 'goldy' });
        // .update({
        //     _id: ObjectId('5acfd74b3533f3c47a974620')
        // }, {
        //     $set: {
        //         favoriteToy: 'sparkle maker'
        //     }
        // })
        // .remove({
        //     _id : ObjectId('5acfd80c3533f3c47a974621')
        // });
    })
    .then(unicorns => {
        console.log(
            JSON.stringify(unicorns, true, 2)
        );
    })
    .catch(err => {
        console.log('FAIL!', err);
    })
    .then(() => {
        client.close();
    });