import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDUt4tvP_1VN5BGm9ACqjyxTRDD7_arJ4Y",
    authDomain: "nsccpractice-1fa36.firebaseapp.com",
    projectId: "nsccpractice-1fa36",
    storageBucket: "nsccpractice-1fa36.appspot.com",
    messagingSenderId: "744172096798",
    appId: "1:744172096798:web:5ff1cb525c53dccb0a4d0f"
  };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app}