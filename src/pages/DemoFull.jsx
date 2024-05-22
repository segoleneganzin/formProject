import { useState } from 'react';
import Form from '../components/Form';

const DemoFull = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = () => {
    try {
      setErrorMessage('');
      setValidationMessage('Formulaire envoyé');
    } catch (error) {
      setValidationMessage('');
      setErrorMessage(error.message);
    }
  };
  return (
    <Form
      title={'Enquête'}
      btnText={'Envoyer'}
      onSubmitFunction={handleForm}
      validationMessage={validationMessage}
      errorMessage={errorMessage}
      fieldNames={['name', 'otherInfos', 'gender', 'country']}
    />
  );
};

export default DemoFull;
