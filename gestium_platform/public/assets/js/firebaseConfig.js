import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA...",
    authDomain: "gestium-f7ed4.firebaseapp.com",
    projectId: "gestium-f7ed4",
    storageBucket: "gestium-f7ed4.appspot.com",
    messagingSenderId: "256571486964",
    appId: "1:256571486964:web:cce69e2665f8e9cb813e4a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
