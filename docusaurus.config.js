import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "30 Days of CPP",
  tagline:
    "30 days of CPP programming challenge is a step-by-step guide to learn CPP programming language in 30 days",
  favicon: "img/favicon.ico",

  url: "https://subhadipbhowmik.github.io/",
  baseUrl: "/30-Days-Of-CPP/", 

  organizationName: "subhadipbhowmik",
  projectName: "30-Days-Of-CPP",
  trailingSlash: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/subhadipbhowmik/30-Days-Of-CPP/tree/main/",
        },
        blog: {
          blogDescription: "Read blog post about C++ programming language",
          showReadingTime: true,
          editUrl:
            "https://github.com/subhadipbhowmik/30-Days-Of-CPP/tree/main/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      algolia: {
        appId: "SKRAQTXG41",
        apiKey: "4eadbd9906c2db99f8c4d53bb7202144",
        indexName: "subhadipbhowmik",
        contextualSearch: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '30 Days of CPP',
        logo: {
          alt: '30 Days Of CPP',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/subhadipbhowmik/30-Days-Of-CPP',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contributors',
                href: 'https://github.com/subhadipbhowmik/30-Days-Of-CPP/graphs/contributors',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Fork 🍴',
                to: 'https://github.com/subhadipbhowmik/30-Days-Of-CPP/fork',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/subhadipbhowmik/30-Days-Of-CPP',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Open Source 🥑.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
