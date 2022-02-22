import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBYgYDChS1nh3Mdd5wTnqs9tGEUG0qVMg",
  authDomain: "facebook-mess-clone-57971.firebaseapp.com",
  projectId: "facebook-mess-clone-57971",
  storageBucket: "facebook-mess-clone-57971.appspot.com",
  messagingSenderId: "854456792333",
  appId: "1:854456792333:web:dbf70eb09e1a1c12b1ac44",
  measurementId: "G-CRRCW7HEY7"
});

const db = firebaseApp.firestore();

export default db;
