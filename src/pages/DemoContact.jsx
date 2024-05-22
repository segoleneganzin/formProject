import { useState } from 'react';
import Form from '../components/Form';

const DemoContact = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (name, email, message) => {
    console.log(name, email, message);
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
      title={'Nous contacter'}
      btnText={'Envoyer'}
      onSubmitFunction={handleForm}
      validationMessage={validationMessage}
      errorMessage={errorMessage}
      fieldNames={['name', 'email', 'message']}
      origin={'contact'}
    />
  );
};

export default DemoContact;
