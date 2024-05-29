import { Link } from 'react-router-dom';
import HomeSummary from '../components/home/HomeSummary';
import HomeIntroduction from '../components/home/HomeIntroduction';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeExamples from '../components/home/HomeExamples';
import HomeInstallation from '../components/home/HomeInstallation';
import HomeFields from '../components/home/HomeFields';
import HomeFieldsExamples from '../components/home/HomeFieldsExamples';
import HomeFieldConfig from '../components/home/HomeFieldConfig';
import HomeFormCss from '../components/home/HomeFormCss';
import HomeFormPreFilling from '../components/home/HomeFormPreFilling';
import HomeComponentForm from '../components/home/HomeComponentForm';

const Home = () => {
  return (
    <>
      <HomeSummary />
      <div className='home__external-link-section'>
        <Link to={'/'} className='home__external-link'>
          Lien npm
        </Link>
        <Link to={'/'} className='home__external-link'>
          Lien CodeSandBox
        </Link>
      </div>
      <div className='home__content'>
        <HomeIntroduction />
        <HomeFeatures />
        <HomeExamples />
        <HomeInstallation />
        <HomeFields />
        <HomeFieldsExamples />
        <HomeFieldConfig />
        <HomeFormCss />
        <HomeFormPreFilling />
        <HomeComponentForm />
      </div>
    </>
  );
};

export default Home;
