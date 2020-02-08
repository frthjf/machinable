module.exports = ctx => ({
  base: '/',
  locales: {
    '/': {
      lang: 'en-UK',
      title: 'machinable',
      description: 'A modular configuration system for machine learning research'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    repo: 'machinable-org/machinable',
    editLinks: true,
    docsDir: 'docs',
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        sidebarDepth: 1,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar(),
          '/reference/': getReferenceSidebar()
        }
      }
    },
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true]
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js'
  ]
})

function getGuideSidebar () {
  return [
    {
      title: 'Preface',
      collapsable: false,
      children: [
        '',
        'at-glance'
      ]
    },
    {
      title: 'Getting started',
      collapsable: false,
      children: [
        'installation',
        'project-structure',
        'machinable-yaml'
      ]
    },
    {
      title: 'Concept',
      collapsable: false,
      children: [
        'components',
        'tasks',
        'observations'
      ]
    },
    {
      title: 'Digging deeper',
      collapsable: false,
      children: [
        'imports',
        'mixins',
        'drivers',
        'tuning',
        'exporting'
      ]
    }
  ]
}

function getReferenceSidebar () {
  return [
    {
      title: 'Core',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'component', 'execution', 'observations'
      ]
    },
    {
      title: 'CLI',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'cli'
      ]
    }
  ]
}