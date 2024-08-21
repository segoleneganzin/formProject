/* eslint-disable no-useless-escape */
import HomeSection from '../../layouts/HomeSection';
import CodeSnippet from '../CodeSnippet';

const HomeFieldsParams = () => {
  return (
    <HomeSection id={'fieldsParams'} title={'Paramètres des champs'}>
      <>
        <p>
          Pour les champs <span className='highlight'>input</span> et{' '}
          <span className='highlight'>textarea</span> :
        </p>
        <CodeSnippet
          codeString={`
            label: 'Label', // string - obligatoire
            type: 'text', // string - obligatoire
            tag: 'textarea' // string - facultatif, input par défaut si non spécifié
            hidden: true // boolean - facultatif, masquer un champs, false par défaut si non spécifié
            step: 5 // number - facultatif, pour les champs de type number
            fieldClass: 'custom-field' // string - facultatif, pour ajouter une classe personnalisée
            isRequired: false // boolean - facultatif, true par défaut si non spécifié
            pattern: /\S+@\S+\.\S+/, // regexp - facultatif, null par défaut si non spécifié
            fieldErrorMessage: 'Veuillez écrire quelquechose ici' // string - facultatif, 'Veuillez renseigner ce champs' par défaut
            `}
        />
        <p>
          Pour les champs <span className='highlight'>select</span> :
        </p>
        <CodeSnippet
          codeString={`
            label: 'Label', // string - obligatoire
            type: 'select', // string - obligatoire
            fieldClass: 'custom-field' // string - facultatif, pour ajouter une classe personnalisée
            defaultValue: 'Choisir votre option', // string - facultatif, 'Choisir une option' par défaut si non spécifié
            fieldErrorMessage: 'Veuillez renseigner le champs', // string - facultatif, 'Veuillez renseigner ce champs' par défaut
            isRequired: false, // boolean - facultatif, true par défaut si non spécifié
            options: [ // array d'objets - obligatoire
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
            `}
        />
        <p>
          Pour les champs <span className='highlight'>radio</span> et{' '}
          <span className='highlight'>checkbox</span> :
        </p>
        <CodeSnippet
          codeString={`
            label: 'Label', // string - obligatoire
            type: 'radio', // string - obligatoire
            fieldClass: 'custom-field' // string - facultatif, pour ajouter une classe personnalisée
            fieldErrorMessage: 'Veuillez renseigner le champs', // string - facultatif, 'Veuillez renseigner ce champs' par défaut
            isRequired: false, // boolean - facultatif, true par défaut si non spécifié
            options: [ // array d'objets - obligatoire
                    {
                        label: 'Homme',
                        value: 'male',
                        name: 'male',
                    },
                    {
                        label: 'Femme',
                        value: 'female',
                        name: 'female',
                        checked: true, // pour cocher un élément par défaut
                    },
            ],
            `}
        />
      </>
    </HomeSection>
  );
};

export default HomeFieldsParams;
