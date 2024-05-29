import { useState } from 'react';
import { Form } from 'sg-form-lib';
import { fieldConfigPerso } from '../fieldConfigPerso';

const DemoRegistration = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (email, password, passwordConfirmation) => {
    try {
      setErrorMessage('');
      if (email && password === passwordConfirmation) {
        // Here you can manage action when form is well submitted
        setValidationMessage('Formulaire envoyé');
      } else {
        throw new Error('Les mots de passe de correspondent pas');
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
        title={"S'inscrire"}
        btnText={'Inscription'}
        onSubmitFunction={handleForm}
        validationMessage={validationMessage}
        errorMessage={errorMessage}
        fieldNames={['email', 'password', 'passwordConfirmation']}
      />
      <p className='demo-infos'>
        Le mot de passe doit avoir un minimum de 8 caractères et comporter au
        moins : <br />
        - Une lettre majuscule
        <br />
        - Une lettre minuscule
        <br />
        - Un chiffre
        <br />
        - Un caractère spécial
        <br />
      </p>
    </div>
  );
};

export default DemoRegistration;
