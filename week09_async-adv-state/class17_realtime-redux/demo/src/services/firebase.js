import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDh-a3I9dQE7iOzsR72AWYUyaphp7AuYos",
  authDomain: "todo-9ea8e.firebaseapp.com",
  databaseURL: "https://todo-9ea8e.firebaseio.com",
  projectId: "todo-9ea8e",
  storageBucket: "todo-9ea8e.appspot.com",
  messagingSenderId: "45672748538"
};

//the root app just in case we need it
export const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); //the real-time database
export const auth = firebaseApp.auth(); //the firebase auth namespace
