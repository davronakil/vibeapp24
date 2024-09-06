import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACXLlgEV0trniWbTImDTDY2D6zRzbkt4Y",
  authDomain: "vibeapp24.firebaseapp.com",
  projectId: "vibeapp24",
  storageBucket: "vibeapp24.appspot.com",
  messagingSenderId: "1050605418268",
  appId: "1:1050605418268:web:4e18d01aff5285c1e52cd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
