import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
const Header = () => {
  return (
    <header className='header'>
      <div>
        <h1>
          <Link to={'/'}>SG Form Lib</Link>
        </h1>
        <p>Librairie ReactJS simplifiant la création de formulaires</p>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
