const HomeFormCss = () => {
  return (
    <section id='formCss' className='home__section'>
      <h2 className='home__section-title'>Classes CSS utilisées</h2>
      <p className='home__section-p'>
        Le composant Form a une largeur de 100%, penser à le mettre dans un
        container <br />
        Pour personnaliser le style des formulaires, vous pouvez utiliser les
        classes CSS suivantes :
      </p>
      <ul className='home__section-list'>
        <li>sg-form-lib</li>
        <li>sg-form-lib__section-title</li>
        <li>sg-form-lib__title</li>
        <li>sg-form-lib__subtitle</li>
        <li>sg-form-lib__content</li>
        <li>sg-form-lib__message--validation</li>
        <li>sg-form-lib__message--error</li>
        <li>sg-form-lib__data</li>
        <li>sg-form-lib__data--error</li>
        <li>sg-form-lib__label</li>
        <li>sg-form-lib__input</li>
        <li>sg-form-lib__textarea</li>
        <li>sg-form-lib__checkboxes</li>
        <li>sg-form-lib__checkbox</li>
        <li>sg-form-lib__radios</li>
        <li>sg-form-lib__radio</li>
        <li>sg-form-lib__select</li>
      </ul>
    </section>
  );
};

export default HomeFormCss;
