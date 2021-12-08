//import firebase from "firebase/compat/app";
//import "firebase/firestore";
import { firebase } from '@firebase/app';
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBLhJMfRSSf3BtJJBAlK1tZBMO2VoLDEdc",
    authDomain: "study-buddy-5be9a.firebaseapp.com",
    projectId: "study-buddy-5be9a",
    storageBucket: "study-buddy-5be9a.appspot.com",
    messagingSenderId: "483209612023",
    appId: "1:483209612023:web:42032d6522e5bf8e1021f2",
    measurementId: "G-2SQ94SK7WW"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;