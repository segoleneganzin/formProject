import HomeSection from '../../layouts/HomeSection';
import CodeSnippet from '../CodeSnippet';

const HomeExamples = () => {
  const codeString = `
  import { useState } from 'react';
  import { Form } from 'sg-form-lib';
  import datas from '../assets/datas.json';
  import { fieldConfigPerso } from '../fieldConfigPerso';

  const DemoConnexion = () => {
    const [validationMessage, setValidationMessage] = useState('');  
    const [errorMessage, setErrorMessage] = useState('');

    const handleForm = (formDatas) => {
    try {
      if (
        formDatas.email === datas.email &&
        formDatas.password !== datas.password
      ) {
        throw new Error('Mot de passe incorrect');
      }
      if (
        formDatas.email === datas.email &&
        formDatas.password === datas.password
      ) {
        // Here you can manage action when form is well submitted
        setValidationMessage('Formulaire envoyé');
      } else {
        throw new Error('Combinaison incorrect');
      }
    } catch (error) {
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
