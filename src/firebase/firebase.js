import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAFc0NncqHLwqVwoBQU6lekPSpAnxHem5U",
    authDomain: "image-uploader-justwyo.firebaseapp.com",
    databaseURL: "https://image-uploader-justwyo.firebaseio.com",
    projectId: "image-uploader-justwyo",
    storageBucket: "image-uploader-justwyo.appspot.com",
    messagingSenderId: "5113661467",
    appId: "1:5113661467:web:6999b2250061d5ff6c90be"
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID 
}

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize storage
const storage = firebase.storage();

//export all this shizz

export {
  storage, firebase as default
};