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
        // Here you can manage action when form is well submitted
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
      <p className='demo-infos'>
        Pour tester la validation vous pouvez indiquer l&apos;email
        &apos;test@test.com&apos;, et le mot de passe &apos;Test1234*&apos;
      </p>
    </div>
  );
};

export default DemoConnexion;
