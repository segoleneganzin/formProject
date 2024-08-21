// Form field settings
// Here you can add all field you want to use into forms
export const fieldConfigPerso = {
  email: {
    label: 'Email',
    type: 'email',
    pattern: /\S+@\S+\.\S+/,
    fieldErrorMessage: 'Veuillez renseigner votre email',
    fieldClass: 'highlight',
    // hidden: true,
  },
  password: {
    label: 'Mot de passe',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    fieldErrorMessage: 'Veuillez renseigner votre mot de passe',
  },
  passwordConfirmation: {
    label: 'Confirmer le mot de passe :',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    fieldErrorMessage: 'Veuillez confirmer votre mot de passe',
  },
  name: {
    label: 'Nom',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre nom',
  },
  age: {
    label: 'Âge',
    type: 'number',
    fieldErrorMessage: 'Veuillez renseigner votre âge',
  },
  tel: {
    label: 'Téléphone',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre numéro de téléphone',
  },
  // textarea
  message: {
    tag: 'textarea',
    label: 'Message',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre message',
  },
  otherInfos: {
    tag: 'textarea',
    label: 'Autre(s) information(s)',
    type: 'text',
    isRequired: false,
  },

  // radio buttons
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
  // select
  country: {
    type: 'select',
    label: 'Pays',
    defaultValue: 'Choisir une option',
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
  // checkboxes
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
};
