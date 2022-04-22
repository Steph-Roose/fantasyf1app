import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCeoizgftkNp_AobJsZaFwbhApxrBji6cc",
    authDomain: "f1fantasy-48b8d.firebaseapp.com",
    projectId: "f1fantasy-48b8d",
    storageBucket: "f1fantasy-48b8d.appspot.com",
    messagingSenderId: "208205255802",
    appId: "1:208205255802:web:a5e4d16702711354d917c3"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

export { projectFirestore, projectAuth, projectStorage }