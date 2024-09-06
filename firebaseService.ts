import { db } from './firebaseConfig';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

interface User {
  id: string;
  name: string;
  email: string;
}

function addUser(user: User) {
  return addDoc(collection(db, 'users'), user);
}

function updateUser(user: User) {
  return setDoc(doc(db, 'users', user.id), user);
}

export { addUser, updateUser };
