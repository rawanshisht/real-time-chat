// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApXB1LjO4S71Hs-kD1dAOi4dDe5_RS8Yc",
  authDomain: "real-time-chat-fd76c.firebaseapp.com",
  projectId: "real-time-chat-fd76c",
  storageBucket: "real-time-chat-fd76c.appspot.com",
  messagingSenderId: "582770499585",
  appId: "1:582770499585:web:c8849f6063bf5e2dbf6000",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
