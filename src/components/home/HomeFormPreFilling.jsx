import { Link } from 'react-router-dom';
const HomeFormPreFilling = () => {
  return (
    <section id='formPreFilling' className='home__section'>
      <h2 className='home__section-title'>Pré-remplissage du formulaire</h2>
      <p className='home__section-p'>
        Vous pouvez pré-remplir le formulaire avec des données en utilisant la
        prop `fieldValue`, qui doit être un objet JSON contenant les données. Le
        nom du champ dans les données doit correspondre au `fieldName` du
        formulaire.
      </p>
      <pre>
        <code>
          {`
        import datas from '../assets/data.json';

        <Form
          fieldsConfig={fieldConfigPerso}
          title={'Modifier mes données'}
          btnText={'Valider'}
          onSubmitFunction={handleForm}
          validationMessage={validationMessage}
          errorMessage={errorMessage}
          fieldNames={['name', 'age', 'tel', 'email']}
          fieldValue={datas}
        />;
      `}
        </code>
      </pre>
      <p className='home__section-p'>
        Voir la page{' '}
        <Link to={'/demo-update'} className='menu__item-link'>
          Pré-remplis
        </Link>
      </p>
    </section>
  );
};

export default HomeFormPreFilling;
