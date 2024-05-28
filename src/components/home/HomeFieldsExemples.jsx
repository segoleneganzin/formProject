/* eslint-disable no-useless-escape */
const HomeFieldsExemples = () => {
  return (
    <section id='fieldsExamples' className='home__section'>
      <h2 className='home__section-title'>Exemples de champs</h2>
      <p className='home__section-p'>
        Par défaut les champs sont requis. <br />
        Les champs prédéfinis incluent :
      </p>
      <ul className='home__section-list'>
        <li>Input</li>
        <pre>
          <code>
            {`email: {
          label: 'Email',
          type: 'email',
          pattern: /\S+@\S+\.\S+/,
          fieldErrorMessage: 'Veuillez renseigner votre email',
          isRequired,
        },`}
          </code>
        </pre>
        <li>Textarea</li>
        <pre>
          <code>
            {`
        message: {
            tag: 'textarea',
            label: 'Message',
            type: 'text',
            fieldErrorMessage: 'Veuillez renseigner votre message',
            isRequired,
          },
        `}
          </code>
        </pre>
        <li>Radio buttons</li>
        <pre>
          <code>
            {`
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
      `}
          </code>
        </pre>
        <li>Select</li>
        <pre>
          <code>
            {`
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
      `}
          </code>
        </pre>
        <li>Checkboxes</li>
        <pre>
          <code>
            {`
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
      `}
          </code>
        </pre>
      </ul>
    </section>
  );
};

export default HomeFieldsExemples;
