import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth }; // Ensure firestore is exported
