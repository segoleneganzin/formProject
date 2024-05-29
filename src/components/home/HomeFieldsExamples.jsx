/* eslint-disable no-useless-escape */
import CodeSnippet from '../CodeSnippet';
import HomeSection from '../../layouts/HomeSection';

const HomeFieldsExamples = () => {
  const inputExample = `
  email: {
    label: 'Email',
    type: 'email',
    pattern: /\S+@\S+\.\S+/,
    fieldErrorMessage: 'Veuillez renseigner votre email', 
    isRequired,
  },
    `;
  const textareaExample = `
  message: {
      tag: 'textarea',
      label: 'Message',
      type: 'text',
      fieldErrorMessage: 'Veuillez renseigner votre message', 
      isRequired,
    },
    `;
  const selectExample = `
  country: {
    tag: 'select',
    label: 'Pays',
    defaultValue: 'Choisir une option',
    fieldErrorMessage: 'Veuillez renseigner votre pays', 
    isRequired,
    options: [
      {
        label: 'Angleterre',
        value: 'Angleterre',
      },
      {
        label: 'Espagne',
        value: 'Espagne',
      },
      {
        label: 'France',
        value: 'France',
      },
    ],
  },
  `;
  const radioExample = `
  gender: {
    tag: 'radio',
    type: 'radio',
    label: 'Genre',
    fieldErrorMessage: 'Veuillez renseigner votre genre', 
    isRequired,
    radios: [
      {
        label: 'Homme',
        value: 'Homme',
        name: 'male',
      },
      {
        label: 'Femme',
        value: 'Femme',
        name: 'female',
      },
    ],
  },
  `;
  const checkboxExample = `
  foodAllergies: {
    tag: 'checkbox',
    type: 'checkbox',
    label: 'Allergie(s) alimentaire(s)', 
    isRequired: false,
    checkboxes: [
      {
        label: 'Gluten',
        value: 'gluten',
        name: 'gluten',
      },
      {
        label: 'Arachides',
        value: 'peanuts',
        name: 'peanuts',
      },
      {
        label: 'Lactose',
        value: 'milk',
        name: 'milk',
      },
    ],
  },
  `;

  return (
    <HomeSection
      id={'fieldsExamples'}
      title={'Exemples de champs dans le fichier fieldConfig'}
    >
      <>
        <p className='home__section-p'>
          Par défaut les champs sont requis. <br />
        </p>
        <ul className='home__section-list'>
          <li>Input</li>
          <CodeSnippet codeString={inputExample} />
          <li>Textarea</li>
          <CodeSnippet codeString={textareaExample} />
          <li>Select</li>
          <CodeSnippet codeString={selectExample} />
          <li>Radio buttons</li>
          <CodeSnippet codeString={radioExample} />
          <li>Checkboxes</li>
          <CodeSnippet codeString={checkboxExample} />
        </ul>
      </>
    </HomeSection>
  );
};

export default HomeFieldsExamples;
