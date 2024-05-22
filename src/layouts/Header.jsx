import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
const Header = () => {
  return (
    <header className='header'>
      <h1>
        <Link to={'/'}>Form Project</Link>
      </h1>
      <Menu />
    </header>
  );
};

export default Header;
