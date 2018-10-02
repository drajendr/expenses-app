import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_SbhZuAv4zvoty8VLrGwIhZT2tJyddPE",
    authDomain: "expense-11dc0.firebaseapp.com",
    databaseURL: "https://expense-11dc0.firebaseio.com",
    projectId: "expense-11dc0",
    storageBucket: "expense-11dc0.appspot.com",
    messagingSenderId: "131857473347"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };