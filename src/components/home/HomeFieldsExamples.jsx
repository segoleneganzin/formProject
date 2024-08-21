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
  },
    `;
  const textareaExample = `
  message: {
    tag: 'textarea',
    label: 'Message',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre message',
  },
    `;
  const selectExample = `
  country: {
    type: 'select',
    label: 'Pays',
    defaultValue: 'Choisir votre pays',
    fieldErrorMessage: 'Veuillez renseigner votre pays',
    options: [
      {
        label: 'Angleterre',
        value: 'england',
      },
      {
        label: 'Espagne',
        value: 'spain',
      },
      {
        label: 'France',
        value: 'france',
      },
    ],
  },
  `;
  const radioExample = `
  gender: {
    type: 'radio',
    label: 'Genre',
    fieldErrorMessage: 'Veuillez renseigner votre genre',
    options: [
      {
        label: 'Homme',
        value: 'male',
        name: 'male',
      },
      {
        label: 'Femme',
        value: 'female',
        name: 'female',
        checked: true,
      },
    ],
  },
  `;
  const checkboxExample = `
  animals: {
    tag: 'checkbox',
    type: 'checkbox',
    label: 'Animaux déjà adoptés',
    fieldErrorMessage: 'Veuillez renseigner vos animaux adoptés',
    isRequired: false,
    options: [
      {
        label: 'Chien',
        value: 'dog',
        name: 'dog',
      },
      {
        label: 'Chat',
        value: 'cat',
        name: 'cat',
      },
      {
        label: 'NAC',
        value: 'nac',
        name: 'nac',
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
          Par défaut : <br />
          - les champs sont requis <br />
          - tag = input <br />
          - hidden = false <br />
          - step = null <br />
          - fieldClass = &apos;&apos;
          <br />
          - isRequired = true
          <br />
          - pattern = null
          <br />
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
