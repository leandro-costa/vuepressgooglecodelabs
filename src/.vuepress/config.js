const { description } = require('../../package')

const glob = require('glob')

// function for loading all MD files in a directory
const getChildren = function(parent, path) {
  return glob
    .sync(parent + '/' + path + '/**/*.md')
    .map(f => {
      // remove "parent" and ".md"
      f = f.slice(parent.length + 1, -3)
      // remove README
      if (f.endsWith('README')) {
        f = f.slice(0, -6)
      }
      return f
    })
    .sort()
}

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
    sidebar: [
      {
        title: 'Google codelabs',
        collapsable: true,
        sidebarDepth: 2,
        children: getChildren('src', 'step-coures')
      },
      {
        title: 'Pagedjs polyfill',
        collapsable: true,
        children: getChildren('src', 'view-print')
      }
    ]
    
  },
  
  markdown: {

    extendMarkdown: md => {
        md.use(require("markdown-it-plantuml"))
        md.use(require("markdown-it-footnote"))
        md.use(require("markdown-it-deflist"))
        md.use(require("markdown-it-katex"))
        md.use(require("markdown-it-include"))
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
