// Form field settings
// Here you can add all field you want to use into forms
// default tag = input
// default pattern = null
// label and type are always required
const isRequired = true; // default isRequired
export const fieldConfig = {
  email: {
    name: 'email',
    label: 'Email',
    type: 'email',
    pattern: /\S+@\S+\.\S+/,
    isRequired,
  },
  passwordConfirmation: {
    name: 'passwordConfirmation',
    label: 'Confirmer le mot de passe :',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    isRequired,
  },
  password: {
    name: 'password',
    label: 'Mot de passe',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    isRequired,
  },
  message: {
    tag: 'textarea',
    name: 'message',
    label: 'Message',
    type: 'text',
    isRequired,
  },
  name: { name: 'name', label: 'Nom', type: 'text', isRequired },
  age: { name: 'age', label: 'Âge', type: 'number', isRequired },
  tel: { name: 'tel', label: 'Téléphone', type: 'text', isRequired },
  otherInfos: {
    tag: 'textarea',
    name: 'otherInfos',
    label: 'Autre(s) information(s)',
    type: 'text',
    isRequired: false,
  },
  // radio buttons
  gender: {
    tag: 'radio',
    name: 'gender',
    type: 'radio',
    label: 'Genre',
    isRequired: false,
    radios: [
      {
        label: 'Homme',
        value: 'male',
        name: 'male',
      },
      {
        label: 'Femme',
        value: 'female',
        name: 'female',
      },
    ],
  },
  // select
  country: {
    tag: 'select',
    name: 'country',
    label: 'Pays',
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
    isRequired,
  },
};
