import { hopeTheme } from 'vuepress-theme-hope'

export default hopeTheme({
  iconAssets: 'fontawesome-with-brands',
  repo: 'linxinrao/Shamrock',
  docsRepo: 'linxinrao/Shamrock',
  docsBranch: 'docs',
  docsDir: 'docs',
  navbar: [
    { text: '首页', link: '/', icon: 'home' },
    { text: '指南', link: '/guide/getting-started', icon: 'lightbulb' },
    { text: 'API 文档', link: '/api/request-response', icon: 'book' },
    { text: '常见问题', link: '/faq', icon: 'circle-question' },
    { text: 'QQ群', link: 'https://qm.qq.com/q/LlHABKWhu4', icon: 'fa-brands fa-qq' }
  ],
  sidebar: [
    {
      text: '指南',
      prefix: 'guide',
      icon: 'lightbulb',
      children: ['getting-started', 'configuration']
    },
    {
      text: 'API 文档',
      prefix: 'api',
      icon: 'book',
      children: ['request-response']
    }
  ]
})
