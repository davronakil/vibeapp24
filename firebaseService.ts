import { firestore } from './firebaseConfig'; // Change db to firestore
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

interface User {
  id: string;
  name: string;
  email: string;
}

export async function addUser(user: User) {
  await addDoc(collection(firestore, 'users'), user);
}

export async function updateUser(user: User) {
  await setDoc(doc(firestore, 'users', user.id), user);
}
