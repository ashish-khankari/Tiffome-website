import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/analytics'


const firebaseConfig = {
  apiKey: "AIzaSyBnwylceq03T79B3tFKwDgGMIDMXzO8keM",
  authDomain: "tiffome-b16f8.firebaseapp.com",
  projectId: "tiffome-b16f8",
  storageBucket: "tiffome-b16f8.appspot.com",
  messagingSenderId: "19371067861",
  appId: "1:19371067861:web:1000f750124e074b73555c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
