import { useState } from 'react';
import Form from '../components/Form';

const DemoForm = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = () => {
    try {
      setErrorMessage('');
      setValidationMessage('Formulaire envoyé');
      // TODO action when submit ok
    } catch (error) {
      setErrorMessage("Erreur d'envoi du formulaire");
    }
  };
  return (
    <Form
      title={'Se connecter'}
      btnText={'Connexion'}
      onSubmitFunction={handleForm}
      validationMessage={validationMessage}
      errorMessage={errorMessage}
      fieldNames={['email', 'password']}
      origin={'connection'}
    />
  );
};

export default DemoForm;
