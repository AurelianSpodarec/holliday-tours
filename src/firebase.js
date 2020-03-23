import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCBOJ3bb2cTT_GmmWgGAz5o7mWEGljnwTE",
    authDomain: "holliday-tours.firebaseapp.com",
    databaseURL: "https://holliday-tours.firebaseio.com",
    projectId: "holliday-tours",
    storageBucket: "holliday-tours.appspot.com",
    messagingSenderId: "239732502417",
    appId: "1:239732502417:web:d13fd6d61beba1f4e27430"
};

firebase.initializeApp(firebaseConfig)
export default firebase;