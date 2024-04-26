import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Saiba Mais
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="carta">
          <h3>Carta do Secretariado</h3>
          <p>A equipe do Secretariado tem o prazer de dar as boas-vindas ao SenaMUN II!! Em 2022 tivemos nossa primeira edição, a qual foi um sucesso e estamos extremamente empolgados em abrir a nossa segunda conferência que acontecerá nos dias 08 e 09 de novembro de 2023.
  Com o tema “O Brasil no Cenário Internacional: Passado, Presente e Futuro”, convidamos as delegações a participarem de discussões críticas sobre o papel do Brasil no meio internacional. Através de diálogo aberto e respeitoso, esperamos por resoluções que possam mudar o rumo de nossa história! 
  O SenaMUN contará com nove comitês, tanto em português como em inglês, liderados por uma grande equipe de mesários que com toda certeza ajudará a promover ótimos debates. O secretariado agradece e deseja uma ótima mediação aos nossos mesários convidados!
  Esperamos que esta seja uma ótima oportunidade para que os delegados possam aprimorar suas habilidades de falar em público, resolver situações e impor suas opiniões de forma ética e respeitosa. Aguardamos ansiosamente sua participação no SenaMUN II, se tiver alguma dúvida adicional, não hesite em contatar o secretariado e não deixe de nos seguir no Instagram @senacmun.  
  Esperamos ver todos vocês lá, Secretariado. </p>
        </div>
        <div className="tema-conferencia">
          <h3>Tema da Conferência</h3>
          <h3>"O mundo é o que se vê onde se está"</h3>
          <p>Milton Santos</p>
          <p>31 de novembro à 01 de novembro</p>
          <p>Das 00:00 até 00:00</p>
          <p>Centro Universitário Senac - Santo Amaro</p>
          <p>Av. Eng. Eusébio Stevaux 823, São Paulo, SP, 04696-000</p>
        </div>
        <HomepageFeatures/>

      </main>
    </Layout>
  );
}
