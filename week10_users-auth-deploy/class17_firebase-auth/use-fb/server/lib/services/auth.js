/* eslint no-console: "off" */
const admin = require('firebase-admin');
const serviceAccount = require('../../firebase-adminsdk-service-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
});

module.exports = {
    verify(token) {
        return admin.auth().verifyIdToken(token);
    },
    getByUid(uid) {
        return admin.auth().getUser(uid);
    }
};
