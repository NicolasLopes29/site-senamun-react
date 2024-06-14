import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CardsSection from '../components/CardsSection';
import FirstBanner from "../components/FirstBanner";
import SecretariatLetter from "../components/SectretariatLetter";
import React from "react";
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Card from '../components/CardsSection/Card';
import InformationsPart from '../../../site/src/components/InformationsPart';
import { FaPlayCircle } from "react-icons/fa";
import HomepageHeader from '../components/HomepageHeader';

export default function Mapa() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader pageTitle="Mapa" pageSubtitle="Se localize melhor" />
      <main>
        <h1 className='legenda-mapas'>Mapa do campus</h1>
        <img src="/img/mapacampus.png" alt="Mapa" />
        <h1 className='legenda-mapas'>Mapa do acadêmico 2 - Segundo andar</h1>
        <img src='/img/mapaacad2.png' alt='Mapa' />
      </main>
    </Layout>
  );
}
