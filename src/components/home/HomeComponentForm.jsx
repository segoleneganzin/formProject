const HomeComponentForm = () => {
  return (
    <section id='componentForm' className='home__section'>
      <h2 className='home__section-title'>Composant Form</h2>
      <p className='home__section-p'>Props</p>
      <ul className='home__section-list'>
        <li>
          btnText (string, required) : Le texte du bouton de soumission du
          formulaire.
        </li>
        <li>
          onSubmitFunction (function, required) : La fonction à appeler lors de
          la soumission du formulaire.
        </li>
        <li>
          fieldNames (array of strings, required) : Les noms des champs à
          inclure dans le formulaire.
        </li>
        <li>
          fieldsConfig (object) : La configuration des champs. (Facultatif,
          utilise la configuration par défaut si non spécifiée)
        </li>
        <li>title (string) : Le titre du formulaire. (Facultatif)</li>
        <li>subtitle (string) : Le sous-titre du formulaire. (Facultatif)</li>
        <li>
          validationMessage (string) : Le message de validation à afficher.
          (Facultatif)
        </li>
        <li>
          errorMessage (string) : Le message d&apos;erreur à afficher.
          (Facultatif)
        </li>
        <li>
          fieldValue (object) : Les valeurs initiales des champs. (Facultatif)
        </li>
        <li>id (string) : l&apos;id correspondant au form.</li>
      </ul>
    </section>
  );
};

export default HomeComponentForm;
