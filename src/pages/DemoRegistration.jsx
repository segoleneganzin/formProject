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
    </div>
  );
};

export default DemoRegistration;
