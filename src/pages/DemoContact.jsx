import { useState } from 'react';
import { Form } from 'sg-form-lib';
import { fieldConfigPerso } from '../utils/fieldConfigPerso';

const DemoContact = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (formDatas) => {
    console.log(formDatas);
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
    <div className='container'>
      <Form
        fieldsConfig={fieldConfigPerso}
        title={'Nous contacter'}
        btnText={'Envoyer'}
        onSubmitFunction={handleForm}
        validationMessage={validationMessage}
        errorMessage={errorMessage}
        fieldNames={['name', 'email', 'message']}
      />
    </div>
  );
};

export default DemoContact;
