import HomeSection from '../../layouts/HomeSection';

const HomeComponentForm = () => {
  return (
    <HomeSection id={'componentForm'} title={'Props du composant Form'}>
      <ul className='home__section-list'>
        <li>
          <span className='highlight'>formId</span> (string) : l&apos;id
          correspondant au form.
        </li>
        <li>
          <span className='highlight'>fieldsConfig</span> (object) : La
          configuration des champs. (Facultatif, utilise la configuration par
          défaut si non spécifiée)
        </li>
        <li>
          <span className='highlight'>title</span> (string) : Le titre du
          formulaire. (Facultatif)
        </li>
        <li>
          <span className='highlight'>subtitle</span> (string) : Le sous-titre
          du formulaire. (Facultatif)
        </li>
        <li>
          <span className='highlight'>btnText</span> (string, required) : Le
          texte du bouton de soumission du formulaire.
        </li>
        <li>
          <span className='highlight'>onSubmitFunction</span> (function,
          required) : La fonction à appeler lors de la soumission du formulaire.
        </li>
        <li>
          <span className='highlight'>validationMessage</span> (string) : Le
          message de validation à afficher. (Facultatif)
        </li>
        <li>
          <span className='highlight'>errorMessage</span> (string) : Le message
          d&apos;erreur à afficher. (Facultatif)
        </li>
        <li>
          <span className='highlight'>fieldNames</span> (array of strings,
          required) : Les noms des champs à inclure dans le formulaire.
        </li>
        <li>
          <span className='highlight'>fieldValue</span> (object) : Les valeurs
          initiales des champs. (Facultatif)
        </li>
      </ul>
    </HomeSection>
  );
};

export default HomeComponentForm;
