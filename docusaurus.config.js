import { themes as prismThemes } from "prism-react-renderer";
require("dotenv").config();

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
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/subhadipbhowmik/30-Days-Of-CPP/tree/main/",
        },
        blog: {
          blogDescription: 'Read blog post about C++ programming language',
          showReadingTime: true,
          editUrl:
            "https://github.com/subhadipbhowmik/30-Days-Of-CPP/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        pages: {
          path: "./src/pages",
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

        // Public API key: it is safe to commit it
        apiKey: "4eadbd9906c2db99f8c4d53bb7202144",

        indexName: "subhadipbhowmik",

        // Optional: see doc section below
        contextualSearch: false,
      },
      image: "img/30-days-cpp-banner.png",
      navbar: {
        title: "30 Days of CPP",
        logo: {
            alt: "30 Days of CPP Programming Logo",
            src: "img/logo.svg",
        },
        items: [
            {
                type: "docSidebar",
                sidebarId: "tutorialSidebar",
                position: "left",
                label: "Tutorial",
            },
            { to: "/blog", label: "Blog", position: "left" },
            {
                href: "https://github.com/subhadipbhowmik/30-Days-Of-CPP/",
                label: "GitHub",
                position: "right",
            },
            {
                to: "/signup", 
                label: "Sign Up",
                position: "right",
            },
            {
                to: "/login", 
                label: "Login",
                position: "right",
            },
        ],
    },
    
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
              icons: [
                {
                  name: "Facebook",
                  link: "https://www.facebook.com/",
                  icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M22 12h-2v-10a8 8 0 0 0-8-8H4a8 8 0 0 0-8 8v10h-2a1 1 0 0 0-1-1v-10a10 10 0 0 1 10-10h8a10 10 0 0 1 10 10v10a1 1 0 0 0-1 1z'/></svg>"
                },
                {
                  name: "Twitter",
                  link: "https://twitter.com/",
                  icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M24 8.587c-3.387.517-7.387 1.64-12.125 3.183a8.108 8.108 0 0 0-2.875 5.666 11.645 11.645 0 0 1-8.667-3.103V14.008c1.2-1.2 2.8-2.165 4.8-3.29 5.391-4.207 10.676-6.23 15.294-6.729z'/></svg>"
                },
                {
                  name: "Discord",
                  link: "https://discord.com/",
                  icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 76 76'><path d='M67 38a19 19 0 0 1-19 19V57a19 19 0 0 1-19-19V19a19 19 0 0 1 19-19h14a19 19 0 0 1 19 19v19a19 19 0 0 1-19 19zM24 11a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5h28a5 5 0 0 0 5-5V16a5 5 0 0 0-5-5h-28z'/></svg>"
                },
                {
                  name: "LinkedIn",
                  link: "https://www.linkedin.com/",
                  icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path d='M16 22a16 16 0 0 1-16-16v-14h32v14a16 16 0 0 1-16 16zM31 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM28 19h-3v-19h3v19z'/></svg>"
                },
                {
                  name: "GitHub",
                  link: "https://github.com/",
                  icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><path d='M167.99 377.16c116.7 52.8 144.75-106.86 278.55-274.7
                }
              ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/subhadipbhowmik/30-Days-Of-CPP/",
              },
            ],
          },
        ],
        copyright: `Built with Open Source 🥑</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["cpp"],
      },
    }),
};

export default config;
