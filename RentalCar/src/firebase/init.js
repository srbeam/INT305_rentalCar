// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjzsIuCvzz3pLQy2nbhTVmRrWg8jrqUak",
  authDomain: "int305fb116.firebaseapp.com",
  projectId: "int305fb116",
  storageBucket: "int305fb116.appspot.com",
  messagingSenderId: "190917644901",
  appId: "1:190917644901:web:70c8982ec7f9b75e0d2c8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore()

export default db