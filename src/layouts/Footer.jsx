import logoLinkedin from '../assets/images/linkedin.png';
import logoGitHub from '../assets/images/github.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__social-media'>
        <a
          href='https://www.linkedin.com/in/segoleneganzin/'
          rel='noreferrer'
          target='_blank'
        >
          <img
            src={logoLinkedin}
            alt='Logo Linkedin - page de profil Linkedin'
          />
        </a>
        <a
          href='https://github.com/segoleneganzin'
          rel='noreferrer'
          target='_blank'
        >
          <img src={logoGitHub} alt='Logo GitHub - page de profil GitHub' />
        </a>
      </div>
      <p>
        &copy; 2024 Réalisé par{' '}
        <Link href='https://segoleneganzin.fr' rel='noreferrer' target='_blank'>
          Ségolène GANZIN
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
