// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMo07DPnBtBGrC5Q0MTO9z7DjU2fvitrM",
    authDomain: "react-login-16aa5.firebaseapp.com",
    projectId: "react-login-16aa5",
    storageBucket: "react-login-16aa5.appspot.com",
    messagingSenderId: "977221887511",
    appId: "1:977221887511:web:8856151748751fc0c3de52",
    measurementId: "G-HB85QJW1WM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the Auth instance from Firebase

export { auth, app }; // Export the auth instance and the app instance if needed
export default app; // Export the app instance as default if needed