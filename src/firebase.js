import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBbxlhsuc3o7XCbZ82haH5rTYUiWkL1NdY",
    authDomain: "react-sign-in-up.firebaseapp.com",
    projectId: "react-sign-in-up",
    storageBucket: "react-sign-in-up.appspot.com",
    messagingSenderId: "491002986748",
    appId: "1:491002986748:web:a5622fc5717793d76cd779",
    measurementId: "G-TGCRH46LRX"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  

  export const auth = app.auth()
  export default app