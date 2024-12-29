import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Ensure you're importing getAuth for Firebase Authentication

const firebaseConfig = {
    apiKey: "AIzaSyC98d86G8gj7ZM-7mv1-BH96yF1x4MDduc",
    authDomain: "my-hotel-9834f.firebaseapp.com",
    projectId: "my-hotel-9834f",
    storageBucket: "my-hotel-9834f.firebasestorage.app",
    messagingSenderId: "952895100782",
    appId: "1:952895100782:web:d80f966e34dabb1a00537f",
    measurementId: "G-38P18PX1VV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the auth instance for use in the rest of the app
export const auth = getAuth(app);
