import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '736'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '421'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2ef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c40'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '35c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '619'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '887'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '6ae'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '874'),
    exact: true
  },
  {
    path: '/blog/bolsonaro-pombo',
    component: ComponentCreator('/blog/bolsonaro-pombo', '107'),
    exact: true
  },
  {
    path: '/blog/cachorro',
    component: ComponentCreator('/blog/cachorro', '657'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'cad'),
    exact: true
  },
  {
    path: '/blog/tags/bolsonaro',
    component: ComponentCreator('/blog/tags/bolsonaro', '70b'),
    exact: true
  },
  {
    path: '/blog/tags/cachorro',
    component: ComponentCreator('/blog/tags/cachorro', '780'),
    exact: true
  },
  {
    path: '/blog/tags/politica',
    component: ComponentCreator('/blog/tags/politica', 'e98'),
    exact: true
  },
  {
    path: '/blog/tags/pombo',
    component: ComponentCreator('/blog/tags/pombo', 'f2e'),
    exact: true
  },
  {
    path: '/blog/tags/senamun',
    component: ComponentCreator('/blog/tags/senamun', 'd77'),
    exact: true
  },
  {
    path: '/blog/tags/yoga',
    component: ComponentCreator('/blog/tags/yoga', '325'),
    exact: true
  },
  {
    path: '/comites',
    component: ComponentCreator('/comites', 'cde'),
    exact: true
  },
  {
    path: '/comites/ingles',
    component: ComponentCreator('/comites/ingles', '3a9'),
    exact: true
  },
  {
    path: '/comites/portugues',
    component: ComponentCreator('/comites/portugues', 'a91'),
    exact: true
  },
  {
    path: '/cronograma',
    component: ComponentCreator('/cronograma', '913'),
    exact: true
  },
  {
    path: '/mapa',
    component: ComponentCreator('/mapa', 'd46'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a2c'),
    exact: true
  },
  {
    path: '/quem-somos-nos',
    component: ComponentCreator('/quem-somos-nos', '76a'),
    exact: true
  },
  {
    path: '/secretariado',
    component: ComponentCreator('/secretariado', '53f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '776'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4ba'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '305'),
            routes: [
              {
                path: '/docs/category/edições-passadas',
                component: ComponentCreator('/docs/category/edições-passadas', '702'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/senamun-iii',
                component: ComponentCreator('/docs/category/senamun-iii', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Edições Passadas/senamun-i',
                component: ComponentCreator('/docs/Edições Passadas/senamun-i', 'd10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Edições Passadas/senamun-ii',
                component: ComponentCreator('/docs/Edições Passadas/senamun-ii', '0cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fale-conosco',
                component: ComponentCreator('/docs/fale-conosco', 'dda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Senamun III/congratulations',
                component: ComponentCreator('/docs/Senamun III/congratulations', '839'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Senamun III/create-a-blog-post',
                component: ComponentCreator('/docs/Senamun III/create-a-blog-post', '1ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Senamun III/create-a-document',
                component: ComponentCreator('/docs/Senamun III/create-a-document', '907'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Senamun III/create-a-page',
                component: ComponentCreator('/docs/Senamun III/create-a-page', '0d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Senamun III/deploy-your-site',
                component: ComponentCreator('/docs/Senamun III/deploy-your-site', '4b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Senamun III/markdown-features',
                component: ComponentCreator('/docs/Senamun III/markdown-features', 'aae'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e98'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
