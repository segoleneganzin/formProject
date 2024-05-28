const HomeFieldConfig = () => {
  return (
    <section id='fieldConfig' className='home__section'>
      <h2 className='home__section-title'>Personnalisation des champs</h2>
      <p className='home__section-p'>
        Par défaut, le composant Form se base sur le fichier
        `default-config.jsx`, présent dans la librairie. <br />
        Ce dernier vous permet de prendre connaissance du format attendu pour
        chaque type de champs. <br />
        Il est possible de définir votre propre fichier de configuration. <br />
        Vous pouvez copier le contenu du fichier `default-config.jsx` présent
        dans `node_modules/sg-form-lib/config/`, <br />
        Ensuite, où vous le souhaitez vous pouvez créer un fichier personnel (ex
        : fieldConfigPerso.jsx) et coller le contenu précédemment copié. <br />
        En fonction de vos besoin, vous pouvez ajouter, modifier ou supprimer ce
        qui s&apos;y trouve. <br />
        Pensez à garder le bon format adapté à chaque type de champ. <br />
        Lorque vous utilisez le composant Form, ajoutez la prop :
      </p>
      <pre>
        <code>{`fieldsConfig={fieldConfigPerso}`}</code>
      </pre>
      <p>Pensez au préalable à importer votre fichier : </p>

      <pre>
        <code>{`import { fieldConfigPerso } from '../fieldConfigPerso';`}</code>
      </pre>
    </section>
  );
};

export default HomeFieldConfig;
