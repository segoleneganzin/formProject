import HomeSection from '../../layouts/HomeSection';

const HomeFeatures = () => {
  return (
    <HomeSection id={'features'} title={'Fonctionnalités'}>
      <>
        <ul className='home__section-list'>
          <li>
            Composant <code className='home__section-code'>Form</code> pour la
            création de formulaires.
          </li>
          <li>Champs prédéfinis : email, password, name, age, etc.</li>
          <li>Gestion des erreurs et validation, grâce au hook useForm.</li>
          <li>Personnalisation des champs via un fichier de configuration.</li>
          <li>Prise en charge des patterns et des champs requis.</li>
          <li>
            Ce composant bénéficie d&apos; une ref &apos;form&apos; :{' '}
            <code className='home__section-code'> const form = useRef();</code>
          </li>
          <li>Possibilité d&apos;ajouter un id pour le form via une prop.</li>
        </ul>
      </>
    </HomeSection>
  );
};

export default HomeFeatures;
