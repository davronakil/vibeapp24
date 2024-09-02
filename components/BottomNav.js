import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faHeart, faComments, faUser } from '@fortawesome/free-solid-svg-icons';

const BottomNav = () => {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-2xl mx-auto flex justify-around py-2">
        <NavItem href="/home" icon={faHome} active={router.pathname === '/home'} />
        <NavItem href="/eat" icon={faUtensils} active={router.pathname === '/eat'} />
        <NavItem href="/favorites" icon={faHeart} active={router.pathname === '/favorites'} />
        <NavItem href="/chat" icon={faComments} active={router.pathname === '/chat'} />
        <NavItem href="/profile" icon={faUser} active={router.pathname === '/profile'} />
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon, active }) => {
  return (
    <Link href={href}>
      <div className={`flex flex-col items-center ${active ? 'text-indigo-600' : 'text-gray-600'}`}>
        <FontAwesomeIcon icon={icon} className="h-6 w-6" />
      </div>
    </Link>
  );
};

export default BottomNav;
