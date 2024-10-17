

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwaUcuX90LGY9CFXYXfzqfa2wIwNcCW54",
  authDomain: "easyeatmobile.firebaseapp.com",
  projectId: "easyeatmobile",
  storageBucket: "easyeatmobile.appspot.com",
  messagingSenderId: "164959613714",
  appId: "1:164959613714:web:c0cb6b602310119d5eb9cb",
  measurementId: "G-DCC2W4QV7W"
 
}


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


export { firebase }