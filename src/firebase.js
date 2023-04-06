import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: "AIzaSyAaRq_HgPN_Dseq5fdwglJdR-qC2QlF5-4",
    authDomain: "chat-7ca58.firebaseapp.com",
    projectId: "chat-7ca58",
    storageBucket: "chat-7ca58.appspot.com",
    messagingSenderId: "877579505827",
    appId: "1:877579505827:web:57c75e23cc2e1b5310ef16",
    databaseURL: "https://chat-7ca58-default-rtdb.europe-west1.firebasedatabase.app"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const auth = firebase.auth();

export { auth};
