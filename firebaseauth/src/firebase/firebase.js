// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Make sure to import getAuth

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrTTW1VQMbiA7YE_S6v1w9cOk2MHcYMOk",
  authDomain: "relu-consultancy-assignm-d08f5.firebaseapp.com",
  projectId: "relu-consultancy-assignm-d08f5",
  storageBucket: "relu-consultancy-assignm-d08f5.appspot.com",
  messagingSenderId: "937931769024",
  appId: "1:937931769024:web:5e0e58a6a30e54742a1925",
  measurementId: "G-ESD8Y2DFPB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
