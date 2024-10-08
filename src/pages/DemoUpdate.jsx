import { useState } from 'react';
import { Form } from 'sg-form-lib';
import datas from '../assets/datas.json';
import { fieldConfigPerso } from '../utils/fieldConfigPerso';

const DemoUpdate = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (name, age, tel, email) => {
    console.log(
      'Nom : ' +
        name +
        ', âge : ' +
        age +
        ', téléphone : ' +
        tel +
        ', email : ' +
        email
    );
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
        title={'Modifier mes données'}
        subtitle={'Ici vous pouvez modifier vos données personnelles'}
        btnText={'Valider'}
        onSubmitFunction={handleForm}
        validationMessage={validationMessage}
        errorMessage={errorMessage}
        fieldNames={['name', 'age', 'tel', 'email']}
        fieldValue={datas}
      />
    </div>
  );
};

export default DemoUpdate;
