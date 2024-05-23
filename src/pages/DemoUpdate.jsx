import { useState } from 'react';
import Form from '../components/Form';
import datas from '../assets/data.json';

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
    <Form
      title={'Modifier mes données'}
      btnText={'Valider'}
      onSubmitFunction={handleForm}
      validationMessage={validationMessage}
      errorMessage={errorMessage}
      fieldNames={['name', 'age', 'tel', 'email']}
      fieldValue={datas}
    />
  );
};

export default DemoUpdate;