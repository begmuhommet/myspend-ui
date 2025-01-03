import { Tabbar } from '@telegram-apps/telegram-ui';
import clsx from 'clsx';
import { IoAddCircleOutline, IoHome, IoPeople, IoSettingsSharp, IoStatsChart } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router';

const navigation = [
  { label: 'Home', icon: <IoHome className="w-5 h-5 my-1" />, link: '/' },
  { label: 'Groups', icon: <IoPeople className="w-5 h-5 my-1" />, link: '/groups' },
  { label: 'Transactions', icon: <IoAddCircleOutline className="w-7 h-7 my-1" />, link: '/transactions' },
  { label: 'Reports', icon: <IoStatsChart className="w-5 h-5 my-1" />, link: '/reports' },
  { label: 'Settings', icon: <IoSettingsSharp className="w-5 h-5 my-1" />, link: '/settings' },
];

const Navbar = () => {
  // Hooks
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Variables
  const isActive = (link: string) => {
    const routes = pathname.split('/').filter((item) => item.length > 1);
    const linkName = link.split('/').pop();

    if (routes.length === 0) {
      return link === '/';
    }

    return routes[0] === linkName;
  };

  // Handlers
  const handleNavigate = (link: string) => () => {
    navigate(link);
  };

  // Renders
  const renderNavigation = () => {
    return navigation.map((nav) => (
      <Tabbar.Item
        key={nav.label}
        onClick={handleNavigate(nav.link)}
        selected={isActive(nav.link)}
        className={clsx('text-theme opacity-80 [&:div]:p-3', isActive(nav.link) && 'opacity-100')}
      >
        {nav.icon}
      </Tabbar.Item>
    ));
  };

  return <Tabbar className="z-50 bg-secondary">{renderNavigation()}</Tabbar>;
};

export default Navbar;
