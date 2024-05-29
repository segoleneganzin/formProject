import PropTypes from 'prop-types';

const HomeSection = ({ id, title, children }) => {
  return (
    <section id={id} className='home__section'>
      <h2 className='home__section-title'>{title}</h2>
      <div className='home__section-content'>{children}</div>
    </section>
  );
};

HomeSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default HomeSection;
