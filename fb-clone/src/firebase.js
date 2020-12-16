import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9M1Lstl2nm5dm51N1TosFUOvJbYrJQOA",
    authDomain: "fb-clone-cf5a3.firebaseapp.com",
    projectId: "fb-clone-cf5a3",
    storageBucket: "fb-clone-cf5a3.appspot.com",
    messagingSenderId: "907058559798",
    appId: "1:907058559798:web:0c2e76a3cb3962b98ed197",
    measurementId: "G-C047LFPZ4E"
};

// connecting the front and backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;