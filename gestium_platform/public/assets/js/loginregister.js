// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
const app = initializeApp(firebaseConfig);


//inputs
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

//submit button
const submit = document.getElementById('Sign In');
submit.addEventListener("click", function (event) {
  event.preventDefault()
  alert(5)
})