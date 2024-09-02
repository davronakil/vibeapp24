import Link from 'next/link';
import { useRouter } from 'next/router';

const BottomNav = () => {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-2xl mx-auto flex justify-around py-2">
        <NavItem href="/" label="Home" active={router.pathname === '/'} />
        <NavItem href="/eat" label="Eat" active={router.pathname === '/eat'} />
        <NavItem href="/favorites" label="Favorites" active={router.pathname === '/favorites'} />
        <NavItem href="/chat" label="Chat" active={router.pathname === '/chat'} />
        <NavItem href="/profile" label="Profile" active={router.pathname === '/profile'} />
      </div>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  label: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, active }) => {
  return (
    <Link href={href}>
      <a className={`flex flex-col items-center ${active ? 'text-indigo-600' : 'text-gray-600'}`}>
        <span className="text-sm">{label}</span>
      </a>
    </Link>
  );
};

export default BottomNav;
