// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'; // Import necessary functions
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA74dOFbxVjMjW8rgFIUtfUydZkQLj4A6w',
  authDomain: 'authprac-4a984.firebaseapp.com',
  projectId: 'authprac-4a984',
  storageBucket: 'authprac-4a984.appspot.com',
  messagingSenderId: '347397404551',
  appId: '1:347397404551:web:4848b2b19923a4b058c522'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize storage

// Create providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup, // Export signInWithPopup
  googleProvider,  // Export googleProvider
  facebookProvider, // Export facebookProvider
  storage,
  ref,
  uploadBytes,
  getDownloadURL
};
