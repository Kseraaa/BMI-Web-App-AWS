import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWxOYr-uMbZfOPYpvZ10Cd134XPRKr5EA",
  authDomain: "cloud-project-4872a.firebaseapp.com",
  projectId: "cloud-project-4872a",
  storageBucket: "cloud-project-4872a.appspot.com",
  messagingSenderId: "319540258341",
  appId: "1:319540258341:web:663bf887b48cb836d341cc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export {db} ;