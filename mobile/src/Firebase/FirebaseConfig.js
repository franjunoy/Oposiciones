// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBymKWluTmsRQhQIGlysoUYuC12t9oBREI",
  authDomain: "esfera-oposiciones-app.firebaseapp.com",
  projectId: "esfera-oposiciones-app",
  storageBucket: "esfera-oposiciones-app.appspot.com",
  messagingSenderId: "223365782093",
  appId: "1:223365782093:web:34d8e6a33803ee94f21a04"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)

 export default auth