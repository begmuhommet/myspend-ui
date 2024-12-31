import { Icon, Navbar } from 'konsta/react';
import { IoPerson } from 'react-icons/io5';
import { NavLink } from 'react-router';
import logoPath from 'src/assets/logo.svg';

const Header = () => {
  // Renders
  return (
    <Navbar>
      <div className="container flex items-center justify-between">
        <img src={logoPath} alt="logo" className="w-8 h-8" />
        <NavLink to="/">
          <Icon ios={<IoPerson className="w-6 h-6" />} material={<IoPerson className="w-6 h-6" />} />
        </NavLink>
      </div>
    </Navbar>
  );
};

export default Header;
