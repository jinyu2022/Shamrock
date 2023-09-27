import { hopeTheme, navbar, sidebar } from 'vuepress-theme-hope'

export default hopeTheme({
  iconAssets: 'fontawesome-with-brands',
  repo: 'linxinrao/Shamrock',
  docsRepo: 'linxinrao/Shamrock',
  docsBranch: 'docs',
  docsDir: 'docs',
  navbar: navbar([
    { text: '首页', link: '/', icon: 'home' },
    { text: '指南', link: '/guide', icon: 'lightbulb' },
    { text: 'API 文档', link: '/api', icon: 'code' },
    { text: '常见问题', link: '/faq', icon: 'circle-question' },
    { text: 'QQ群', link: 'https://qm.qq.com/q/LlHABKWhu4', icon: 'fa-brands fa-qq' }
  ]),
  sidebar: {
    '/': [
      {
        text: '下载',
        icon: 'download',
        link: 'download'
      },
      {
        text: '安装',
        prefix: 'install',
        link: 'install',
        icon: 'fa-brands fa-instalod',
        children: ['windows', 'macos', 'linux']
      },
      {
        text: '指南',
        prefix: 'guide',
        link: 'guide',
        icon: 'lightbulb',
        children: []
      }
    ]
  }
})
