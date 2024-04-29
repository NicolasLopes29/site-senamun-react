import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comitês',
    Svg: require('@site/static/img/logo_color.svg').default,
    description: (
      <>
      Saiba mais
      </>
    ),
  },
  {
    title: 'Formulários',
    Svg: require('@site/static/img/logo_color.svg').default,
    description: (
      <>
      Saiba mais
      </>
    ),
  },
  {
    title: 'Cronograma',
    Svg: require('@site/static/img/logo_color.svg').default,
    description: (
      <>
      Saiba mais
      </>
    ),
  },
  {
    title: 'Recursos',
    Svg: require('@site/static/img/logo_color.svg').default,
    description: (
      <>
      Saiba mais
      </>
    ),
  },
  {
    title: 'Mapa',
    Svg: require('@site/static/img/logo_color.svg').default,
    description: (
      <>
      Saiba mais
      </>
    ),
  },
  {
    title: 'xxx',
    Svg: require('@site/static/img/logo_color.svg').default,
    description: (
      <>
      Saiba mais
      </>
    ),
  },

];

function Feature({Svg, title, description, button}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">

      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
    
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
