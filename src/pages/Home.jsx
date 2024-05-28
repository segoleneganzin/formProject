import HomeSummary from '../components/home/HomeSummary';
import HomeIntroduction from '../components/home/HomeIntroduction';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeExemples from '../components/home/HomeExemples';
import HomeInstallation from '../components/home/HomeInstallation';
import HomeFields from '../components/home/HomeFields';
import HomeFieldsExemples from '../components/home/HomeFieldsExemples';
import HomeFieldConfig from '../components/home/HomeFieldConfig';
import HomeFormCss from '../components/home/HomeFormCss';
import HomeFormPreFilling from '../components/home/HomeFormPreFilling';
import HomeComponentForm from '../components/home/HomeComponentForm';

const Home = () => {
  return (
    <div>
      <p>Librairie ReactJS simplifiant la création de formulaires</p>
      <HomeSummary />
      <HomeIntroduction />
      <HomeFeatures />
      <HomeExemples />
      <HomeInstallation />
      <HomeFields />
      <HomeFieldsExemples />
      <HomeFieldConfig />
      <HomeFormCss />
      <HomeFormPreFilling />
      <HomeComponentForm />
    </div>
  );
};

export default Home;
