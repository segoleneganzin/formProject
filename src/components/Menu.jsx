/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const openResponsiveMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      <nav className={hamburgerOpen ? 'menu--responsive' : 'menu'}>
        <Link to={'/demo-connection'} className='menu__item-link'>
          Connexion
        </Link>
        <Link to={'/demo-registration'} className='menu__item-link'>
          Inscription
        </Link>
        <Link to={'/demo-contact'} className='menu__item-link'>
          Contact
        </Link>
      </nav>
      <a
        href='#'
        className='icon'
        onClick={openResponsiveMenu}
        aria-haspopup='true'
        aria-controls='toggleNavbar'
        aria-expanded={hamburgerOpen}
        aria-label='Ouverture du menu'
      >
        <span className='burger-icon'>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
    </div>
  );
};

export default Menu;
