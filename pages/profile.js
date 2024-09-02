import { useState } from 'react';
import { db, auth } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Profile() {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    location: '',
    interests: '',
    profilePicture: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await setDoc(doc(db, 'profiles', user.uid), profile);
        console.log('Profile saved successfully');
      } catch (error) {
        console.error('Error saving profile: ', error);
      }
    } else {
      console.log('No user is signed in');
    }
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={profile.email} onChange={handleChange} />
        </div>
        <div>
          <label>Bio:</label>
          <textarea name="bio" value={profile.bio} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={profile.location} onChange={handleChange} />
        </div>
        <div>
          <label>Interests:</label>
          <input type="text" name="interests" value={profile.interests} onChange={handleChange} />
        </div>
        <div>
          <label>Profile Picture URL:</label>
          <input type="text" name="profilePicture" value={profile.profilePicture} onChange={handleChange} />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}
