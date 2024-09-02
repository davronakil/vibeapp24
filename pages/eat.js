import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import Link from 'next/link';

export default function Eat() {
  const [user] = useAuthState(auth);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Eat</h1>
        {user && (
          <Link href="/new-eat-event">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Let&apos;s Eat
            </button>
          </Link>
        )}
      </div>
      {user ? (
        <div className="space-y-4">
          {/* Add your eat content here */}
          <p className="text-gray-700">Your favorite places to eat will be displayed here.</p>
        </div>
      ) : (
        <p className="text-gray-700">Please log in to see your favorite places to eat.</p>
      )}
    </div>
  );
}
