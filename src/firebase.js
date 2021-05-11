import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlprZ1eW0RXtBqKqPhAv3oDNCLrHoJHUg",
  authDomain: "clone-8fe7c.firebaseapp.com",
  projectId: "clone-8fe7c",
  storageBucket: "clone-8fe7c.appspot.com",
  messagingSenderId: "832475147287",
  appId: "1:832475147287:web:ec1a62e8121cb9f9928052",
  measurementId: "G-R2GYVZE0GZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
