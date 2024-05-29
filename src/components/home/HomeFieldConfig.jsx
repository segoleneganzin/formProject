import CodeSnippet from '../CodeSnippet';
import HomeSection from '../../layouts/HomeSection';

const HomeFieldConfig = () => {
  return (
    <HomeSection id={'fieldConfig'} title={'Personnalisation des champs'}>
      <>
        <p className='home__section-p'>
          Par défaut, le composant Form se base sur le fichier
          <code className='home__section-code'>default-config.jsx</code>,
          présent dans la librairie. <br />
          Ce dernier vous permet de prendre connaissance du format attendu pour
          chaque type de champs. <br />
          Il est possible de définir votre propre fichier de configuration.{' '}
          <br />
          Vous pouvez copier le contenu du fichier{' '}
          <code className='home__section-code'>default-config.jsx</code> présent
          dans{' '}
          <code className='home__section-code'>
            node_modules/sg-form-lib/config/
          </code>
          , <br />
          Ensuite, où vous le souhaitez vous pouvez créer un fichier personnel
          (ex : fieldConfigPerso.jsx) et coller le contenu précédemment copié.
          <br />
          En fonction de vos besoin, vous pouvez ajouter, modifier ou supprimer
          ce qui s&apos;y trouve. <br />
          Pensez à garder le bon format adapté à chaque type de champ. <br />
          Lorque vous utilisez le composant{' '}
          <code className='home__section-code'>Form</code>, ajoutez la prop :
        </p>
        <CodeSnippet codeString={`fieldsConfig={fieldConfigPerso}`} />
        <p>Pensez au préalable à importer votre fichier : </p>
        <CodeSnippet
          codeString={`import { fieldConfigPerso } from '../fieldConfigPerso';`}
        />
      </>
    </HomeSection>
  );
};

export default HomeFieldConfig;
