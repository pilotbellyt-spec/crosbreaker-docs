module.exports = {
  title: 'crosbreaker',
  tagline: 'Documentation for crosbreaker\'s ChromeOS exploits and tools.',
  url: 'https://docs.crosbreaker.com',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw', onBrokenMarkdownImages: 'throw'}},
  plugins: [require.resolve('./plugins/doc-catalog')],
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
      items: [
        {to: '/quickstart/', label: 'Getting Started', position: 'left'},
        {href: 'https://github.com/orgs/crosbreaker/repositories', label: 'GitHub', position: 'right'},
      ],
    },
    colorMode: {respectPrefersColorScheme: true},
  },
};
