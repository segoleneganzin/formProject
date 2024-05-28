// Form field settings
// Here you can add all field you want to use into forms
// default tag = input
// default pattern = null
// label and type are always required
const isRequired = true; // default isRequired
export const fieldConfigPerso = {
  email: {
    label: 'Test',
    type: 'email',
    pattern: /\S+@\S+\.\S+/,
    fieldErrorMessage: 'Test',
    isRequired,
  },
  passwordConfirmation: {
    label: 'Confirmer le mot de passe :',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    fieldErrorMessage: 'Veuillez confirmer votre mot de passe',
    isRequired,
  },
  password: {
    label: 'Mot de passe',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    fieldErrorMessage: 'Veuillez renseigner votre mot de passe',
    isRequired,
  },
  message: {
    tag: 'textarea',
    label: 'Message',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre message',
    isRequired,
  },
  name: {
    label: 'Nom',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre nom',
    isRequired,
  },
  age: {
    label: 'Âge',
    type: 'number',
    fieldErrorMessage: 'Veuillez renseigner votre âge',
    isRequired,
  },
  tel: {
    label: 'Téléphone',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre numéro de téléphone',
    isRequired,
  },
  otherInfos: {
    tag: 'textarea',
    label: 'Autre(s) information(s)',
    type: 'text',
    isRequired: false,
  },
  // radio buttons
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
  // select
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
  // checkboxes
  animals: {
    tag: 'checkbox',
    type: 'checkbox',
    label: 'Animaux déjà adoptés',
    fieldErrorMessage: 'Veuillez renseigner vos animaux adoptés',
    isRequired: false,
    checkboxes: [
      {
        label: 'Chien',
        value: 'chien',
        name: 'dog',
      },
      {
        label: 'Chat',
        value: 'chat',
        name: 'cat',
      },
      {
        label: 'NAC',
        value: 'NAC',
        name: 'nac',
      },
    ],
  },
};
