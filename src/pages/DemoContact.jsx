import { useState } from 'react';
import Form from '../components/Form';

const DemoContact = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (name, email, message) => {
    console.log(name, email, message);
    try {
      setErrorMessage('');
      // Here you can manage action when form is well submitted
      setValidationMessage('Formulaire envoyé');
    } catch (error) {
      setValidationMessage('');
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
    />
  );
};

export default DemoContact;
