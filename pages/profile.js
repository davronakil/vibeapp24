import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import BottomNav from '../components/BottomNav';

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [profileData, setProfileData] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProfileData(docSnap.data());
          } else {
            setFetchError('No profile data found');
          }
        } catch (err) {
          setFetchError(err.message);
        } finally {
          setFetching(false);
        }
      } else {
        setFetching(false);
        setFetchError('User not authenticated');
      }
    };

    fetchProfileData();
  }, [user]);

  if (loading || fetching) return <div>Loading...</div>;
  if (error || fetchError) return <div>Error: {error?.message || fetchError}</div>;

  return (
    <div>
      <h1>Profile</h1>
      {profileData ? (
        <div>
          <p>Goals: {profileData.goals}</p>
          <p>Age: {profileData.age}</p>
          <p>Diet: {profileData.diet}</p>
          <p>Marital Status: {profileData.maritalStatus}</p>
          <p>Interests: {profileData.interests}</p>
          <p>Substances: {profileData.substances}</p>
        </div>
      ) : (
        <div>No profile data available</div>
      )}
      <BottomNav />
    </div>
  );
};

export default Profile;
