// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv7NoqKGX3p74vHIaEl3o7XJnL2AJwvMw",
  authDomain: "toothstory-blog-app.firebaseapp.com",
  projectId: "toothstory-blog-app",
  storageBucket: "toothstory-blog-app.appspot.com",
  messagingSenderId: "88593048368",
  appId: "1:88593048368:web:3b377bf4b61df0a0e2def5",
  measurementId: "G-22C11H5CT0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const imageStore = getStorage(app);
