import { db } from './firebaseConfig';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

interface User {
  id: string;
  name: string;
  email: string;
}

export async function addUser(user: User) {
  await addDoc(collection(db, 'users'), user);
}

export async function updateUser(user: User) {
  await setDoc(doc(db, 'users', user.id), user);
}
