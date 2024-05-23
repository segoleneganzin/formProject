import { useState } from 'react';
import Form from '../components/Form';

const DemoFull = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (name, gender, country, animals, otherInfos) => {
    try {
      console.log(
        'Nom : ' +
          name +
          ', genre : ' +
          gender +
          ', pays : ' +
          country +
          ', animaux adoptés : ' +
          animals +
          ', autres informations : ' +
          otherInfos
      );
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
      fieldNames={['name', 'gender', 'country', 'animals', 'otherInfos']}
    />
  );
};

export default DemoFull;
