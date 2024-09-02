import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/home');
    } catch (error) {
      console.error('Error signing in with Google: ', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-4">
          <FontAwesomeIcon icon={faUserCircle} className="text-gray-400 h-24 w-24" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to VibeApp24</h1>
        <p className="text-center text-gray-600 mb-6">Sign in to continue</p>
        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
