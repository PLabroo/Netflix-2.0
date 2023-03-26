import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw-XoZRJD6erP96IZtRDlM46o2VDSRnjQ",
  authDomain: "netflix-clone-9462e.firebaseapp.com",
  projectId: "netflix-clone-9462e",
  storageBucket: "netflix-clone-9462e.appspot.com",
  messagingSenderId: "951948497551",
  appId: "1:951948497551:web:1e3f33e3835c15464a56fa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
