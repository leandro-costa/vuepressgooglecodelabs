const { description } = require('../../package')

module.exports = {
  
  base:'/vuepressgooglecodelabs',
  dest: 'docs',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Google Codelabs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#1A73E8' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ,['meta', { name: 'viewport', content: 'width=device-width, minimum-scale=1.0,initial-scale=1.0, user-scalable=yes' }]
    ,['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400|Roboto:400,300,400italic,500,700|Roboto+Mono' }]
    ,['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }]
    ,['link', { rel: 'stylesheet', href: 'https://storage.googleapis.com/codelab-elements/codelab-elements.css' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'leandro-costa/vuepressgooglecodelabs',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      }      
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            ['google-codelab','A codelab demo'],
            ['java','A java codelab demo'],
          ]
        }
      ],
    }
  },
  
  markdown: {

    extendMarkdown: md => {
        md.use(require("markdown-it-plantuml"))
        //md.use(require("markdown-it-footnote"))
        md.use(require("markdown-it-deflist"))
        md.use(require("markdown-it-katex"))
        //md.use(require("markdown-it-include"))
        //md.use(require("markdown-it-task-lists"))
    },
    lineNumbers: true

  },


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
     ['@vuepress/plugin-medium-zoom', {
            options: {
                margin: 0,
                background: '#252525'
            }
        }],
  ]
}
