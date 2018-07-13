const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/test';
let db = null;

MongoClient.connect(url)
    .then(_db => {
        db = _db;
        return db.collection('unicorns')
            .find()        
            .toArray();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('FAIL!', err);
    })
    .then(() => {
        db.close();
    });