  import * as firebase from 'firebase/app';
  import 'firebase/auth';
  import 'firebase/analytics'

  
  const app = firebase.initializeApp({
    apiKey: "AIzaSyDIGCnquuXSekDbP9DlC-qbq-49AC-DDKI",
    authDomain: "lastkapstone.firebaseapp.com",
    databaseURL: "https://lastkapstone.firebaseio.com",
    projectId: "lastkapstone",
    storageBucket: "lastkapstone.appspot.com",
    messagingSenderId: "990445118107",
    appId: "1:990445118107:web:30148745402b32a8691c3e",
    measurementId: "G-7DDZXGTGFD"
  });
  // Initialize Firebase
  firebase.analytics();
  export default app