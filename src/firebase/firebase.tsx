import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}


const firebaseConfig:FirebaseConfig  = {
    apiKey: "AIzaSyCbKB4xYmTNujY__4QsDn0qikiLgakBxWA",
    authDomain: "avto-page.firebaseapp.com",
    projectId: "avto-page",
    storageBucket: "avto-page.appspot.com",
    messagingSenderId: "339770079943",
    appId: "1:339770079943:web:fb20035b0d6d1802de9ce2"
  };


//init firebae
firebase.initializeApp(firebaseConfig)
///init individual service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
///timestamp

const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}