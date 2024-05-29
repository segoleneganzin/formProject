/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleResponsiveMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      <nav
        className={hamburgerOpen ? 'menu--responsive' : 'menu'}
        onClick={toggleResponsiveMenu}
      >
        <Link to={'/demo-connection'} className='menu__item-link'>
          Démo connexion
        </Link>
        <Link to={'/demo-registration'} className='menu__item-link'>
          Démo inscription
        </Link>
        <Link to={'/demo-contact'} className='menu__item-link'>
          Démo contact
        </Link>
        <Link to={'/demo-update'} className='menu__item-link'>
          Démo pré-remplis
        </Link>
        <Link to={'/demo-full'} className='menu__item-link'>
          Démo complet
        </Link>
      </nav>
      <a
        href='#'
        className='icon'
        onClick={toggleResponsiveMenu}
        aria-haspopup='true'
        aria-controls='toggleNavbar'
        aria-expanded={hamburgerOpen}
        aria-label='Ouverture du menu'
      >
        <span className='menu__burger-icon'>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
    </div>
  );
};

export default Menu;
