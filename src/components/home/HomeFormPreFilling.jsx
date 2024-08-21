import { Link } from 'react-router-dom';
import CodeSnippet from '../CodeSnippet';
import HomeSection from '../../layouts/HomeSection';

const HomeFormPreFilling = () => {
  const codeSnippet = `
  import datas from '../assets/datas.json';

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
  `;
  return (
    <HomeSection id={'formPreFilling'} title={'Pré-remplissage du formulaire'}>
      <>
        <p className='home__section-p'>
          Vous pouvez pré-remplir le formulaire avec des données en utilisant la
          prop <code className='home__section-code'>fieldValue</code>, qui doit
          être un objet JSON contenant les données. Le nom du champ dans les
          données doit correspondre au{' '}
          <code className='home__section-code'>fieldName</code> du formulaire.
        </p>
        <CodeSnippet codeString={codeSnippet} />

        <Link to={'/demo-update'} className='menu__item-link'>
          Voir la page Pré-remplis
        </Link>
      </>
    </HomeSection>
  );
};

export default HomeFormPreFilling;
