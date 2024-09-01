import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACXLlgEV0trniWbTImDTDY2D6zRzbkt4Y",
  authDomain: "vibeapp24.firebaseapp.com",
  projectId: "vibeapp24",
  storageBucket: "vibeapp24.appspot.com",
  messagingSenderId: "1050605418268",
  appId: "1:1050605418268:web:4e18d01aff5285c1e52cd9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
