// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkobJRjwWQ7iXuadGonzKdh18bxx5m4is",
  authDomain: "doctors-protal-3b152.firebaseapp.com",
  projectId: "doctors-protal-3b152",
  storageBucket: "doctors-protal-3b152.appspot.com",
  messagingSenderId: "895765459410",
  appId: "1:895765459410:web:0796532c771b00f538980b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;