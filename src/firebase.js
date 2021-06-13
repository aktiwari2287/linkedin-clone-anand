import firebase from "firebase";
const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyChEIILtquJEolnk-_MjwCzjucP9_mL6lU",
    authDomain: "linkedin-anand.firebaseapp.com",
    projectId: "linkedin-anand",
    storageBucket: "linkedin-anand.appspot.com",
    messagingSenderId: "193555157930",
    appId: "1:193555157930:web:393d747e9a3bd0ac0b11d3",
    measurementId: "G-DF2Z8BY11S"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };