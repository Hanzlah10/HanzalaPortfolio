// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiy2Abb6OPUDEmGvW01ZQJaaKhQbfyU-c",
    authDomain: "hanzalas-portfolio.firebaseapp.com",
    projectId: "hanzalas-portfolio",
    storageBucket: "hanzalas-portfolio.appspot.com",
    messagingSenderId: "1035205593092",
    appId: "1:1035205593092:web:6438cad8a60d818c380d51",
    measurementId: "G-XBB5NSCV6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);