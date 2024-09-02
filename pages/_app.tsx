import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.css';
import BottomNav from '../components/BottomNav';

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user && router.pathname !== '/login') {
      router.push('/login');
    } else if (user && router.pathname === '/login') {
      router.push('/home');
    }
  }, [user, loading, router]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Component {...pageProps} />
      {user && <BottomNav />}
    </>
  );
}

export default MyApp;
