/* eslint no-console: off */
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectId } = require('mongodb');


const url = 'mongodb://localhost:27017/test';
let client = null;
MongoClient.connect(url, { useNewUrlParser: true })
    .then(_client => {
        client = _client;
        const db = client.db();
        return db.collection('unicorns')
            // FIND:
            // .find()        
            // .toArray();

            // INSERT:
            // .insert({ name: 'pinkycorn' })
            // .then(result => result.ops[0]);

            // UPDATE:
            // .update(
            //     // query:
            //     {
            //         _id: ObjectId('5b47d224fd84c6dfabce1e46')
            //     }, 
            //     // values to update:
            //     {
            //         $set: {
            //             favoriteToy: 'party maker'
            //         }
            //     },
            //     // options:
            //     {
                    
            //     }
            // );

            // REMOVE
            .remove({
                _id : ObjectId('5b47d224fd84c6dfabce1e46')
            });
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