import HomeSection from '../../layouts/HomeSection';
import CodeSnippet from '../CodeSnippet';

const HomeInstallation = () => {
  return (
    <HomeSection id={'installation'} title={'Installation'}>
      <>
        <p className='home__section-p'>
          Pour installer la librairie, utilisez l&apos;une des commandes
          suivantes :
        </p>
        <CodeSnippet codeString={`npm i sg-form-lib`} />
        <CodeSnippet codeString={`yarn add sg-form-lib`} />
        <CodeSnippet codeString={`pnpm i sg-form-lib`} />

        <p className='home__section-p'>
          N&apos;oubliez pas d&apos;ajouter le CSS dans votre fichier
          d&apos;entrée :
        </p>
        <CodeSnippet codeString={`import 'sg-form-lib/style.css';`} />
        <p className='home__section-p'>
          Assurez-vous de l&apos;importer avant tout autre CSS pour pouvoir le
          personnaliser correctement.
        </p>
      </>
    </HomeSection>
  );
};

export default HomeInstallation;
