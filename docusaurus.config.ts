import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Gitti',
  tagline: 'A fast, lightweight terminal UI for Git operations',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://gitti.app', // Placeholder URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gohyuhan', // Usually your GitHub org/user name.
  projectName: 'gitti', // Usually your repo name.

  onBrokenLinks: 'throw',
  trailingSlash: true,

  markdown: {
    format: 'mdx',
    mermaid: true,
    preprocessor: ({ filePath, fileContent }) => {
      return fileContent;
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'zh-Hans', 'zh-Hant'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ja: {
        label: '日本語',
      },
      'zh-Hans': {
        label: '简体中文',
      },
      'zh-Hant': {
        label: '繁體中文',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/gohyuhan/gitti/tree/main/docs/',
          includeCurrentVersion: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "ja", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: false,
        searchResultLimits: 12,
        searchResultContextMaxLength: 50,
      },
    ],
  ],

  themeConfig: {
    image: 'img/favicon.png',
    metadata: [
      { name: 'keywords', content: 'git, terminal, ui, cli, open source, tool, productivity, developer tools, git tui, git ui, git terminal, git client, command line interface, cli tool, git gui, terminal ui, developer productivity, git operations, git workflow, ターミナル, オープンソース, ツール, 生産性, 開発者ツール, git tui, git ui, git ターミナル, git クライアント, コマンドライン, cli ツール, ターミナル ui, 開発者ツール, git 操作, 终端, 开源, 工具, 生产力, 开发者工具, git tui, git ui, git 终端, git 客户端, 命令行, cli 工具, 终端 ui, 开发者工具, git 操作, 終端, 開源, 生產力, 開發者工具, git tui, git ui, git 終端, git 客戶端, 命令列, cli 工具, 終端 ui, 開發者工具, git 操作' },
      { name: 'description', content: 'Gitti is a fast, lightweight terminal UI for Git operations, designed to keep you in your flow.' },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Gitti',
      logo: {
        alt: 'Gitti Logo',
        src: 'img/favicon.png',
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/gohyuhan/gitti',
          label: 'GitHub',
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
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Installation',
              to: '/docs/installation',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/gohyuhan/gitti',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} gitti. By <a href="https://my.linkedin.com/in/yu-han-goh-209480200" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:inherit;">Yu Han Goh</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
