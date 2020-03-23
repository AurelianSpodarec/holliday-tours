import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBnCTS77x1023nAXYEPY7nk5fkLoqHXEtA",
    authDomain: "melbourne-tours-coding-test.firebaseapp.com",
    databaseURL: "https://melbourne-tours-coding-test.firebaseio.com",
    projectId: "melbourne-tours-coding-test",
    storageBucket: "melbourne-tours-coding-test.appspot.com",
    messagingSenderId: "661859946727",
    appId: "1:661859946727:web:3768aa4ab67fbf43f59242"
};

firebase.initializeApp(firebaseConfig)
export default firebase;