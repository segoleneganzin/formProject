const HomeFeatures = () => {
  return (
    <section id='features' className='home__section'>
      <h2 className='home__section-title'>Fonctionnalités</h2>
      <ul className='home__section-list'>
        <li>
          Composant <code>Form</code> pour la création de formulaires
        </li>
        <li>Champs prédéfinis : email, password, name, age, etc.</li>
        <li>Gestion des erreurs et validation</li>
        <li>Personnalisation des champs via un fichier de configuration</li>
        <li>Prise en charge des patterns et des champs requis</li>
      </ul>
    </section>
  );
};

export default HomeFeatures;
