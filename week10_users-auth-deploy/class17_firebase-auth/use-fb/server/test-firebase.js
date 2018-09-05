require('dotenv').config();
const auth = require('./lib/services/auth');

// const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwY2ViNDY3NDJhNjNlMTk2NDIxNjNhNzI4NmRjZDQyZjc0MzYzNjYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9kby05ZWE4ZSIsIm5hbWUiOiJNYXJ0eSBOZWxzb24iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1FblJOQkFZdlVSay9BQUFBQUFBQUFBSS9BQUFBQUFBQUFLOC9jTUpORkFWWDVTRS9waG90by5qcGciLCJhdWQiOiJ0b2RvLTllYThlIiwiYXV0aF90aW1lIjoxNTM2MTg0NTg1LCJ1c2VyX2lkIjoicW5kUXVaOGh5TmM4Wk0wcVJsN2tocXZyT0h5MiIsInN1YiI6InFuZFF1WjhoeU5jOFpNMHFSbDdraHF2ck9IeTIiLCJpYXQiOjE1MzYxODU1NTUsImV4cCI6MTUzNjE4OTE1NSwiZW1haWwiOiJtYXJ0eUBhbGNoZW15Y29kZWxhYi5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODMxMTk1NDg2MDU5MjY4NzM5MSJdLCJlbWFpbCI6WyJtYXJ0eUBhbGNoZW15Y29kZWxhYi5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.dagOZAupvhVj-o-nc1WGsD0Lqgy95k8H1JyUhINr7vGav35TYdwpY280CBCvE8YjqEU-VtlcM5CPZ4C62tXHXCBi9-eb2QWW385x8-M-ykaeRssnxx5iqWS2BT46TMpAGfYDWpqayNQ4k6jHSN7vwMdGwhHkNcOZdJMgmYSg6Y2t-uKxwe5pwSk1RVo2uRe6OV7SzzUXMprFueOMHQ4kpb8pc2tNhnWk4ngoOKIZnrW3dagAYdzr4MhLMl0QGf5G6bcpD51Le_RyPV-zevxkOXrLLZOwT4ix6ik1ovQgHFanQ-_7IXuywQZn1pgwBtJwSl6CrmOr6z4jTRG_vuAHbw';

// auth.verify(token)
//     .then(result => {
//         console.log('verified as', result);
//     })
//     .catch(err => {
//         console.log('verify failed', err);
//     });



const FirebaseAuth = require('firebaseauth');
const firebaseAuth = new FirebaseAuth(process.env.FIREBASE_API_KEY);
const { promisify } = require('util');
const signInWithEmail = promisify(firebaseAuth.signInWithEmail.bind(firebaseAuth));

signInWithEmail('test@test.com', 'abc123')
    .then(console.log, console.log);