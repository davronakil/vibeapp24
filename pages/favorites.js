import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

export default function Favorites() {
  const [user] = useAuthState(auth);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Favorites</h1>
      {user ? (
        <div className="space-y-4">
          {/* Add your favorites content here */}
          <p className="text-gray-700">Your favorite items will be displayed here.</p>
        </div>
      ) : (
        <p className="text-gray-700">Please log in to see your favorites.</p>
      )}
    </div>
  );
}
