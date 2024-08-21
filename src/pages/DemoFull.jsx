import { useState } from 'react';
import { Form } from 'sg-form-lib';
import { fieldConfigPerso } from '../utils/fieldConfigPerso';

const DemoFull = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (formDatas) => {
    try {
      console.log(
        'Nom : ' +
          formDatas.name +
          ', genre : ' +
          formDatas.gender +
          ', pays : ' +
          formDatas.country +
          ', animaux : ' +
          formDatas.animals +
          ', autres informations : ' +
          formDatas.otherInfos
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
        fieldsConfig={fieldConfigPerso}
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
