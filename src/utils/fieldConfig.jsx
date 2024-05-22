// default tag = input
// default pattern = null

export const fieldConfig = {
  email: { label: 'Email', type: 'email', pattern: /\S+@\S+\.\S+/ },
  newEmail: {
    label: 'Nouvel e-mail :',
    type: 'email',
    pattern: /\S+@\S+\.\S+/,
  },
  passwordConfirmation: {
    label: 'Confirmer le mot de passe :',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  },
  password: {
    label: 'Mot de passe',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  },
  message: { tag: 'textarea', label: 'Votre message', type: 'text' },
  name: { label: 'Votre nom', type: 'text' },
};
