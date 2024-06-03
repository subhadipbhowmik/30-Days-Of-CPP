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
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
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
