// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyKCI0VtHxrnQwnHt8hRhtkIyy4sgtLYU",
  authDomain: "helpmeout-5449c.firebaseapp.com",
  projectId: "helpmeout-5449c",
  storageBucket: "helpmeout-5449c.appspot.com",
  messagingSenderId: "163878186228",
  appId: "1:163878186228:web:5cfcd859ef11c09bfac2a1",
  measurementId: "G-KQW8699EXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();