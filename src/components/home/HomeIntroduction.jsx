import HomeSection from '../../layouts/HomeSection';
import CodeSnippet from '../CodeSnippet';

const HomeIntroduction = () => {
  const codeString = `
  const handleForm = (formFieldsData) => {  
    // what to do on submit
  };

  <Form
    fieldsConfig = {fieldConfigPerso}
    title = {'Se connecter'}
    btnText = {'Connexion'}
    onSubmitFunction = {handleForm}
    validationMessage = {validationMessage}
    errorMessage = {errorMessage}
    fieldNames = {['email', 'password']}
  />
      `;

  return (
    <HomeSection id={'introduction'} title={'Introduction'}>
      <>
        <p className='home__section-p'>
          Cette librairie contient un composant `Form` qui permet de créer
          facilement des formulaires, en utilisant soit des champs prédéfinis
          dans la librairie, soit en ajoutant vos propres champs. <br />
          Les champs prédéfinis vous offrent une structure de base pour créer
          vos formulaires. <br />
          La gestion des erreurs est prise en compte. <br />
          Il est possible d&apos;ajouter des patterns. <br />
          Les champs sont, par défaut, requis. <br />
          La séléction des champs que vous souhaitez mettre dans le formulaire
          se fait via la prop{' '}
          <code className='home__section-code'>fieldNames</code>, ensuite le
          formulaire va automatiquement récupérer les données nécessaires dans
          le fichier de configuration. <br />
          L&apos;action à réaliser à l&apos;envoi du formulaire se fait via la
          prop <code className='home__section-code'>onSubmitFunction</code>, à
          laquelle vous passez la fonction souhaitée.
          <br />
        </p>
        <CodeSnippet codeString={codeString} />
      </>
    </HomeSection>
  );
};

export default HomeIntroduction;
