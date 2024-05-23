import { useState } from 'react';
import Form from '../components/form/Form';

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
    <div className='container'>
      <Form
        title={"Enquête d'adoption"}
        btnText={'Envoyer'}
        onSubmitFunction={handleForm}
        validationMessage={validationMessage}
        errorMessage={errorMessage}
        fieldNames={['name', 'gender', 'country', 'animals', 'otherInfos']}
      />
    </div>
  );
};

export default DemoFull;
