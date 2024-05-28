const HomeFields = () => {
  return (
    <section id='fields' className='home__section'>
      <h2 className='home__section-title'>Champs prédéfinis</h2>
      <p className='home__section-p'>
        Par défaut les champs sont requis. <br />
        Les champs prédéfinis incluent :
      </p>
      <ul className='home__section-list'>
        <li>email (input)</li>
        <li>password (input de type password)</li>
        <li>passwordConfirmation (input de type password)</li>
        <li>name (input)</li>
        <li>age (input type number)</li>
        <li>tel (input)</li>
        <li>message (textarea)</li>
        <li>otherInfos (textarea)</li>
        <li>gender (radio button)</li>
        <li>country (select)</li>
        <li>foodAllergies (checkbox)</li>
      </ul>
    </section>
  );
};

export default HomeFields;
