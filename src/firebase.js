import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfDLEJB-Cz2zi7oaSvX-fWYzl87s-lV3o",
    authDomain: "clone-81048.firebaseapp.com",
    projectId: "clone-81048",
    storageBucket: "clone-81048.appspot.com",
    messagingSenderId: "44138624449",
    appId: "1:44138624449:web:54d9f46129b29cd5392b40",
    measurementId: "G-J2L1T078RP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };













