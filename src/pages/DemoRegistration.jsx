import { useState } from 'react';
import Form from '../components/Form';
const DemoRegistration = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (email, password, passwordConfirmation) => {
    try {
      setErrorMessage('');
      if (email && password === passwordConfirmation) {
        setValidationMessage('Formulaire envoyé');
        // TODO action when submit ok
      } else {
        throw new Error("password doesn't match");
      }
    } catch (error) {
      console.log(error);
      if (error.message === "password doesn't match") {
        setErrorMessage('Les mots de passe de correspondent pas');
      } else {
        setErrorMessage("Erreur d'envoi du formulaire");
      }
    }
  };
  return (
    <Form
      title={"S'inscrire"}
      btnText={'Inscription'}
      onSubmitFunction={handleForm}
      validationMessage={validationMessage}
      errorMessage={errorMessage}
      fieldNames={['email', 'password', 'passwordConfirmation']}
      origin={'registration'}
    />
  );
};

export default DemoRegistration;
