import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2pE4a2oHUFwgNnW57kfKCv-OOzvJPcsw",
  authDomain: "challenge-b1910.firebaseapp.com",
  databaseURL: "https://challenge-b1910.firebaseio.com",
  projectId: "challenge-b1910",
  storageBucket: "challenge-b1910.appspot.com",
  messagingSenderId: "299884057100",
  appId: "1:299884057100:web:8e55c5baa161f35b419429",
  measurementId: "G-WVX5V486MN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
