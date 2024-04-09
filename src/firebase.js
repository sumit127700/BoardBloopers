// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByo1zKVdCtXD57P7IoHapHzOo2pEL_88s",
  authDomain: "chess-app-5c618.firebaseapp.com",
  projectId: "chess-app-5c618",
  storageBucket: "chess-app-5c618.appspot.com",
  messagingSenderId: "636609597644",
  appId: "1:636609597644:web:5d90d2acde876328e8b269",
  measurementId: "G-DB9VMEQK9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;