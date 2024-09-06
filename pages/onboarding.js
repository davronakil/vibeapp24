import { useState } from 'react';
import { db } from '../lib/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Onboarding = () => {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    goals: '',
    age: '',
    diet: '',
    maritalStatus: '',
    interests: '',
    substances: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, 'users', user.uid), formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="goals" onChange={handleChange} placeholder="Goals" />
      <input name="age" onChange={handleChange} placeholder="Age" />
      <input name="diet" onChange={handleChange} placeholder="Diet" />
      <input name="maritalStatus" onChange={handleChange} placeholder="Marital Status" />
      <input name="interests" onChange={handleChange} placeholder="Interests" />
      <input name="substances" onChange={handleChange} placeholder="Substances" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Onboarding;
