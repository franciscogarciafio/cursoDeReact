import React,{ StrictMode }  from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALI3V0vpL0viQEDG1LlW1F9Y6XDgyU6iY",
  authDomain: "proyecto-coder-garciafio.firebaseapp.com",
  projectId: "proyecto-coder-garciafio",
  storageBucket: "proyecto-coder-garciafio.appspot.com",
  messagingSenderId: "167821915326",
  appId: "1:167821915326:web:b697b5fd4e4dd4c9e5daef",
  measurementId: "G-6480G1FYKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);