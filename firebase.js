// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdeqREYajghXTS_g3cOAz5W81OV_yLgiU",
  authDomain: "goodmoney-a7579.firebaseapp.com",
  projectId: "goodmoney-a7579",
  storageBucket: "goodmoney-a7579.firebasestorage.app",
  messagingSenderId: "702668336145",
  appId: "1:702668336145:web:46ea1429a7423880c055b0",
  measurementId: "G-JLHSNPGWL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
