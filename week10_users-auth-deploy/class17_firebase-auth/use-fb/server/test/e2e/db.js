require('dotenv').config();
const connect = require('../../lib/connect');
const url = 'mongodb://localhost:27017/pirates-test';
const mongoose = require('mongoose');
const FirebaseAuth = require('firebaseauth');
const firebaseAuth = new FirebaseAuth(process.env.FIREBASE_API_KEY);
const { promisify } = require('util');
const signInWithEmail = promisify(firebaseAuth.signInWithEmail.bind(firebaseAuth));

before(() => connect(url));    
after(() => mongoose.connection.close());

let getTokenPromise = null;

module.exports = {
    getToken() {
        if(getTokenPromise) return getTokenPromise;
        
        return getTokenPromise = signInWithEmail('test@test.com', 'abc123')
            .then(result => result.token);
    }
};
