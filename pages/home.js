import Link from 'next/link';
import BottomNav from '../components/BottomNav';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/">Feed</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/eat">Eat</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
        <li>
          <Link href="/chat">Chat</Link>
        </li>
        <li>
          <Link href="/create-event">Create Event</Link>
        </li>
        <li>
          <Link href="/onboarding">Onboarding</Link>
        </li>
      </ul>
      <BottomNav />
    </div>
  );
};

export default HomePage;
