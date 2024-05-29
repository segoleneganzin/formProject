import HomeSection from '../../layouts/HomeSection';
import CodeSnippet from '../CodeSnippet';

const HomeExamples = () => {
  const codeString = `
  import { useState } from 'react';
  import { Form } from 'sg-form-lib';
  import data from '../assets/data.json';
  import { fieldConfigPerso } from '../fieldConfigPerso';

  const DemoConnexion = () => {
    const [validationMessage, setValidationMessage] = useState('');  
    const [errorMessage, setErrorMessage] = useState('');

    const handleForm = (email, password) => {
      try {
        setErrorMessage('');
        if (email === data.email && password !== data.password) {
          throw new Error('Mot de passe incorrect');
        }
        if (email === data.email && password === data.password) {
          setValidationMessage('Formulaire envoyé');
        } else {
          throw new Error('Combinaison incorrect');
        }
      } catch (error) {
        setValidationMessage('');
        setErrorMessage(error.message);
      }
    };

    return (
      <div className='container'>
        <Form
          fieldsConfig={fieldConfigPerso}
          title={'Se connecter'}
          btnText={'Connexion'}
          onSubmitFunction={handleForm}
          validationMessage={validationMessage}
          errorMessage={errorMessage}
          fieldNames={['email', 'password']}
        />
      </div>
    );
  };

  export default DemoConnexion;
      `;

  return (
    <HomeSection id={'example'} title={"Exemple d'utilisation"}>
      <CodeSnippet codeString={codeString} />
    </HomeSection>
  );
};

export default HomeExamples;
