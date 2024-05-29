import HomeSection from '../../layouts/HomeSection';

const HomeFields = () => {
  return (
    <HomeSection id={'fields'} title={'Champs prédéfinis'}>
      <>
        <p className='home__section-p'>
          Par défaut les champs sont requis. <br />
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
      </>
    </HomeSection>
  );
};

export default HomeFields;
