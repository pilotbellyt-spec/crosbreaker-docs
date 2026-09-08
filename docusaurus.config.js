module.exports = {
  title: 'crosbreaker',
  tagline: 'Documentation for crosbreaker\'s ChromeOS exploits and tools.',
  url: 'https://pilotbellyt-spec.github.io',
  baseUrl: '/crosbreaker-docs/',
  organizationName: 'pilotbellyt-spec',
  projectName: 'crosbreaker-docs',
  favicon: 'favicon.ico',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw', onBrokenMarkdownImages: 'throw'}},
  plugins: [require.resolve('./plugins/doc-catalog')],
  themes: [[require.resolve('@easyops-cn/docusaurus-search-local'), {
    hashed: true,
    docsRouteBasePath: '/',
    indexBlog: false,
    highlightSearchTermsOnTargetPage: true,
  }]],
  presets: [
    ['classic', {
      docs: {routeBasePath: '/', sidebarPath: require.resolve('./sidebars.js')},
      blog: false,
      pages: false,
      theme: {customCss: require.resolve('./src/css/custom.css')},
    }],
  ],
  themeConfig: {
    navbar: {
      title: 'crosbreaker',
      logo: {src: 'img/crosbreaker.webp', alt: 'crosbreaker'},
      items: [
        {to: '/quickstart/', label: 'Getting Started', position: 'left'},
        {type: 'search', position: 'right'},
        {href: 'https://github.com/orgs/crosbreaker/repositories', label: 'GitHub', position: 'right'},
      ],
    },
    colorMode: {defaultMode: 'dark', respectPrefersColorScheme: false},
    prism: {additionalLanguages: ['bash']},
  },
};
