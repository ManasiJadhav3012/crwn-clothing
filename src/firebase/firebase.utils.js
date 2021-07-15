import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA1LAyanLpEaSQgrX-qVgPVFm-BKx8TiMs",
    authDomain: "crwn-db-63c5f.firebaseapp.com",
    projectId: "crwn-db-63c5f",
    storageBucket: "crwn-db-63c5f.appspot.com",
    messagingSenderId: "404859821814",
    appId: "1:404859821814:web:80a35514584b3b6b7096d7",
    measurementId: "G-W3R7FSE008"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;