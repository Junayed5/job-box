
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyJn864eJ-pUG4gS_gWvqVr7il_6x_ZOg",
  authDomain: "jobbox-cf796.firebaseapp.com",
  projectId: "jobbox-cf796",
  storageBucket: "jobbox-cf796.appspot.com",
  messagingSenderId: "926898330355",
  appId: "1:926898330355:web:e55b654fb1d9b28b94b586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
