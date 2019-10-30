import firebase from 'firebase/app';
import 'firebase/auth';
//import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDiMOkjJt4xSUeO4PbrWOjihwxXMtYh-gA',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
  //databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
});

export default app;
