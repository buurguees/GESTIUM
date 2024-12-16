
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAakN24Y8JP68Z4SD7Vg3hc3p-sxDoUGo4",
    authDomain: "gestium-f7ed4.firebaseapp.com",
    projectId: "gestium-f7ed4",
    storageBucket: "gestium-f7ed4.firebasestorage.app",
    messagingSenderId: "256571486964",
    appId: "1:256571486964:web:ce69e2665f8e9cb813e4a1"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
