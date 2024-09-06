import { useState } from 'react';
import { db } from '../lib/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const CreateEvent = () => {
  const [user] = useAuthState(auth);
  const [eventData, setEventData] = useState({
    type: 'Eat',
    option: 'on me',
    description: ''
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'events'), {
      ...eventData,
      userId: user.uid,
      createdAt: new Date()
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="option" onChange={handleChange}>
        <option value="on me">On Me</option>
        <option value="50/50">50/50</option>
        <option value="they pay">They Pay</option>
      </select>
      <textarea name="description" onChange={handleChange} placeholder="Event Description"></textarea>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;
