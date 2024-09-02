import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

export default function Chat() {
  const [user] = useAuthState(auth);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Chat</h1>
      {user ? (
        <div className="space-y-4">
          {/* Add your chat content here */}
          <p className="text-gray-700">Your chat messages will be displayed here.</p>
        </div>
      ) : (
        <p className="text-gray-700">Please log in to access the chat.</p>
      )}
    </div>
  );
}
