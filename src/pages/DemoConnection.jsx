import { useState } from 'react';
import { Form } from 'sg-form-lib';
import data from '../assets/data.json';

const DemoForm = () => {
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
  //TODO allows inscription just under button
  return (
    <div className='container'>
      <Form
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

export default DemoForm;
