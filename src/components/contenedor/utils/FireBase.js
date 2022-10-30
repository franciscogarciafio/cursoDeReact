// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB4zaCX8zrPjDLmPX3hTzRsIXG-UUc9Xs",
  authDomain: "amiciweb-b287a.firebaseapp.com",
  projectId: "amiciweb-b287a",
  storageBucket: "amiciweb-b287a.appspot.com",
  messagingSenderId: "381465127863",
  appId: "1:381465127863:web:100d33982a62c7d7b19632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);