// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbtXaHnGLUROv0xelUQ7mYeUTqc7lcrjQ",
  authDomain: "olx-clone-react-3cef9.firebaseapp.com",
  projectId: "olx-clone-react-3cef9",
  storageBucket: "olx-clone-react-3cef9.appspot.com",
  messagingSenderId: "297811620610",
  appId: "1:297811620610:web:e2afa4b25739b4f570881b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()