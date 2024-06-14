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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader pageTitle="SenaMUN III" pageSubtitle="Conferência Modelo Onu | Senac Nações Unidas" />
      <main>
        <SecretariatLetter/>
        <InformationsPart/>
        <CardsSection/>
      </main>
    </Layout>
  );
}
