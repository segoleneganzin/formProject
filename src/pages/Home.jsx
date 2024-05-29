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
        <Link
          to={'https://www.npmjs.com/package/sg-form-lib'}
          target='_blank'
          className='home__external-link'
        >
          👉 npm
        </Link>
        <Link
          to={
            'https://codesandbox.io/p/devbox/sg-form-lib-test-2zrpn6?file=%2Fsrc%2Fpages%2FHome.jsx%3A23%2C10'
          }
          target='_blank'
          className='home__external-link'
        >
          👉 CodeSandBox
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
