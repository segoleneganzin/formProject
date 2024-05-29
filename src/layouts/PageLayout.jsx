import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
/**
 * Application layout.
 * Use into main.jsx
 * @param {object} props
 * @param {ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element}
 */
const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PageLayout;
