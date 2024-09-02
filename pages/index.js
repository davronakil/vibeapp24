import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      {user ? (
        <div className="space-y-4">
          {/* Add your home content here */}
          <p className="text-gray-700">Welcome to VibeApp24!</p>
        </div>
      ) : (
        <p className="text-gray-700">Please log in to access your home page.</p>
      )}
    </div>
  );
}


