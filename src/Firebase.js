// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxh0LeTDHCxSaxr6dBtB_I1_OokPG758E",
  authDomain: "final-project-44823.firebaseapp.com",
  projectId: "final-project-44823",
  storageBucket: "final-project-44823.appspot.com",
  messagingSenderId: "406243798734",
  appId: "1:406243798734:web:c9edd84d06f50c1f6b6a9f",
  measurementId: "G-H5492BBFQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
