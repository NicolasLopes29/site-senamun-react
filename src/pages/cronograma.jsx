import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from "react";
import HomepageHeader from '../components/HomepageHeader';

export default function Cronograma() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader pageTitle="Cronograma" pageSubtitle="Veja o planejamento" />
      <main>
        <img src="/img/cronograma-senamun24.png" alt="Cronograma" />
      </main>
    </Layout>
  );
}
