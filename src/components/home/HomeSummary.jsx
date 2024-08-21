const HomeSummary = () => {
  return (
    <nav className='home__summary'>
      <h2 className='home__section-title'>Sommaire</h2>
      <ul className='home__section-list'>
        <li>
          <a href='#introduction'>Introduction</a>
        </li>
        <li>
          <a href='#features'>Fonctionnalités</a>
        </li>
        <li>
          <a href='#example'>Exemple d&apos;utilisation</a>
        </li>
        <li>
          <a href='#installation'>Installation</a>
        </li>
        <li>
          <a href='#fields'>Champs prédéfinis</a>
        </li>
        <li>
          <a href='#fieldsExamples'>Exemples de champs</a>
        </li>
        <li>
          <a href='#fieldConfig'>Personnalisation des champs</a>
        </li>
        <li>
          <a href='#fieldsParams'>Paramètres des champs</a>
        </li>
        <li>
          <a href='#componentForm'>Props du composant Form</a>
        </li>
        <li>
          <a href='#formCss'>Classes CSS utilisées</a>
        </li>
        <li>
          <a href='#formPreFilling'>Pré-remplissage du formulaire</a>
        </li>
      </ul>
    </nav>
  );
};

export default HomeSummary;
