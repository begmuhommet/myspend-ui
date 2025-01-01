import { Icon, Tabbar, TabbarLink } from 'konsta/react';
import { IoAddCircleOutline, IoApps, IoHome, IoPeople, IoStatsChart } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router';

const navigation = [
  { label: 'Home', icon: <IoHome className="w-5 h-5" />, link: '/' },
  { label: 'Groups', icon: <IoPeople className="w-6 h-6" />, link: '/groups' },
  { label: 'Transactions', icon: <IoAddCircleOutline className="w-7 h-7" />, link: '/transactions' },
  { label: 'Categories', icon: <IoApps className="w-5 h-5" />, link: '/categories' },
  { label: 'Reports', icon: <IoStatsChart className="w-5 h-5" />, link: '/reports' },
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
      <TabbarLink
        key={nav.label}
        active={isActive(nav.link)}
        onClick={handleNavigate(nav.link)}
        icon={<Icon ios={nav.icon} material={nav.icon} />}
      />
    ));
  };

  return (
    <Tabbar labels={false} icons className="left-0 bottom-0 fixed">
      {renderNavigation()}
    </Tabbar>
  );
};

export default Navbar;
