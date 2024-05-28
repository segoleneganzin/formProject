const HomeIntroduction = () => {
  return (
    <section id='introduction' className='home__section'>
      <h2 className='home__section-title'>Introduction</h2>
      <p className='home__section-p'>
        Cette librairie contient un composant `Form` qui permet de créer
        facilement des formulaires, en utilisant soit des champs prédéfinis dans
        la librairie, soit en ajoutant vos propres champs. Les champs prédéfinis
        vous offrent une structure de base pour créer vos formulaires. La
        gestion des erreurs est prise en compte. <br />
        Il est possible d&apos;ajouter des pattern et de définir quels champs
        sont requis. <br />
        Il suffit de mettre les props adaptées. <br />
        La séléction des champs se fait dans la prop `fieldNames`, ensuite le
        formulaire va automatiquement récupérer les données nécessaires dans le
        fichier de configuration. <br />
        L&apos;action à réaliser à l&apos;envoi du formulaire se fait via la
        prop `onSubmitFunction`, à laquelle vous passez la fonction souhaitée.
        <br />
        Attention a bien passer les paramètres de cette fonction dans le même
        ordre que les champs car la récupération des données se fait
        automatiquement en allant du premier champ au dernier champ. <br />
      </p>
      <pre>
        <code>
          {`
        const handleForm = (email, password)
        <Form
                fieldsConfig={fieldConfigPerso}
                title={'Se connecter'}
                btnText={'Connexion'}
                onSubmitFunction={handleForm}
                validationMessage={validationMessage}
                errorMessage={errorMessage}
                fieldNames={['email', 'password']}
        />
      `}
        </code>
      </pre>
    </section>
  );
};

export default HomeIntroduction;
