import { Tabbar } from '@telegram-apps/telegram-ui';
import { IoAddCircleOutline, IoHome, IoPeople, IoSettingsSharp, IoStatsChart } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router';

const navigation = [
  { label: 'Home', icon: <IoHome style={{ width: 22, height: 22 }} />, link: '/' },
  { label: 'Groups', icon: <IoPeople style={{ width: 22, height: 22 }} />, link: '/groups' },
  { label: 'Transactions', icon: <IoAddCircleOutline style={{ width: 25, height: 25 }} />, link: '/transactions' },
  { label: 'Reports', icon: <IoStatsChart style={{ width: 22, height: 22 }} />, link: '/reports' },
  { label: 'Settings', icon: <IoSettingsSharp style={{ width: 22, height: 22 }} />, link: '/settings' },
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
      <Tabbar.Item key={nav.label} onClick={handleNavigate(nav.link)} selected={isActive(nav.link)}>
        {nav.icon}
      </Tabbar.Item>
    ));
  };

  return <Tabbar className="z-50">{renderNavigation()}</Tabbar>;
};

export default Navbar;
