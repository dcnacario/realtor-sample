// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcVe8PEVUxic5Moo8B3U6175h-H9eq_ag",
  authDomain: "realtor-clone-1b9f5.firebaseapp.com",
  projectId: "realtor-clone-1b9f5",
  storageBucket: "realtor-clone-1b9f5.appspot.com",
  messagingSenderId: "451728837192",
  appId: "1:451728837192:web:530e933b21f3736bea667d",
  measurementId: "G-18YTZG03RF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
