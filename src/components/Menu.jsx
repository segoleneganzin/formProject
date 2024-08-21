/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const checkBurger = useRef();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleResponsiveMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    if (!hamburgerOpen) {
      checkBurger.current.checked = false;
    }
  }, [hamburgerOpen]);

  return (
    <div>
      <nav className={hamburgerOpen ? 'menu--responsive' : 'menu'}>
        <ul className='menu__list' role='menu'>
          <li className='menu__item' role='menuitem'>
            <Link
              to={'/demo-connection'}
              className='menu__item-link'
              onClick={hamburgerOpen && toggleResponsiveMenu}
            >
              Démo connexion
            </Link>
          </li>
          <li className='menu__item' role='menuitem'>
            <Link
              to={'/demo-registration'}
              className='menu__item-link'
              onClick={hamburgerOpen && toggleResponsiveMenu}
            >
              Démo inscription
            </Link>
          </li>
          <li className='menu__item' role='menuitem'>
            <Link
              to={'/demo-contact'}
              className='menu__item-link'
              onClick={hamburgerOpen && toggleResponsiveMenu}
            >
              Démo contact
            </Link>
          </li>
          <li className='menu__item' role='menuitem'>
            <Link
              to={'/demo-update'}
              className='menu__item-link'
              onClick={hamburgerOpen && toggleResponsiveMenu}
            >
              Démo pré-remplis
            </Link>
          </li>
          <li className='menu__item' role='menuitem'>
            <Link
              to={'/demo-full'}
              className='menu__item-link'
              onClick={hamburgerOpen && toggleResponsiveMenu}
            >
              Démo complet
            </Link>
          </li>
        </ul>
      </nav>
      <label className='menu__burger' htmlFor='burger'>
        <input
          ref={checkBurger}
          type='checkbox'
          id='burger'
          onClick={toggleResponsiveMenu}
          aria-haspopup='true'
          aria-controls='toggleNavbar'
          aria-expanded={hamburgerOpen}
          aria-label='Ouverture du menu'
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

export default Menu;
