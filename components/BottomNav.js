import Link from 'next/link';

const BottomNav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/eat">Eat</Link>
      <Link href="/favorites">Favorites</Link>
      <Link href="/chat">Chat</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
};

export default BottomNav;
