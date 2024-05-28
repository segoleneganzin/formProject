const HomeInstallation = () => {
  return (
    <section id='installation' className='home__section'>
      <h2 className='home__section-title'>Installation</h2>
      <p className='home__section-p'>
        Pour installer la librairie, utilisez l&apos;une des commandes suivantes
        :
      </p>
      <pre>
        <code>npm i sg-form-lib</code>
      </pre>
      <pre>
        <code>yarn add sg-form-lib</code>
      </pre>
      <pre>
        <code>pnpm i sg-form-lib</code>
      </pre>
      <p className='home__section-p'>
        N&apos;oubliez pas d&apos;ajouter le CSS dans votre fichier
        d&apos;entrée :
      </p>
      <pre>
        <code>{`import 'sg-form-lib/style.css';`}</code>
      </pre>
      <p className='home__section-p'>
        Assurez-vous de l&apos;importer avant tout autre CSS pour pouvoir le
        personnaliser correctement.
      </p>
    </section>
  );
};

export default HomeInstallation;
