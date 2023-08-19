// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6S5xbTz_17QZX9UoiNH00irGvVBxWQIo",
  authDomain: "fir-auth-2-3521f.firebaseapp.com",
  projectId: "fir-auth-2-3521f",
  storageBucket: "fir-auth-2-3521f.appspot.com",
  messagingSenderId: "202911142320",
  appId: "1:202911142320:web:eefd21f7b8cc75203bc675",
  measurementId: "G-1ELN6N9ZL2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { app, auth, provider };
