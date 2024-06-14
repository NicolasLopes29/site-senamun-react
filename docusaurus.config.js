// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SenaMUN 2024',
  tagline: 'Conferência Modelo ONU | Senac Nações Unidas',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://senamun.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nicolaslopes29', // Usually your GitHub org/user name.
  projectName: 'site-senamun-react', // Usually your repo name.-react

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br','en-us'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'S E N A M U N',
        logo: {
          alt: 'Logo SENAMUN',
          src: 'img/logo.svg',
        }, 

        
        items: [
          {
            type: 'dropdown',
            label: 'Sobre Nós',
            position: 'right',
            items: [
              {
              label: 'Quem Somos',
              to: '/docs/intro',
            },
            {
              label: 'Secretariado',
              to: '/secretariado',
            },
            ],
          },
          {
            type: 'dropdown',
          label: 'Senamun 2024',
          position: 'right',
          items: [
            {
              label: 'Comitês',
              to: '/comites',
            },
            {
              label: 'Equipe',
              to: '/equipe',
            },
            {
              label: 'Cronograma',
              to: '/cronograma',
            },
            {
              label: 'Recursos',
              to: '/recursos',
            },
            {
              label: 'Mapa',
              to: '/mapa',
            },
            {
              label: 'Notícias',
              to: '/blog',
            },
            // ... more items
          ],
          },
          {
            to: '/docs/fale-conosco',
            label: 'Fale Conosco',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Notícias',
                to: '/blog',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/senamun_/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SenaMUN.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
