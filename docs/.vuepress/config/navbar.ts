import { navbar } from 'vuepress-theme-hope'

const shamrockNavbar = navbar([
  { text: '首页', link: '/', icon: 'home' },
  { text: '指南', link: '/guide', icon: 'lightbulb' },
  { text: '进阶', link: '/advanced', icon: 'star' },
  { text: 'API 文档', link: '/api', icon: 'book' },
  { text: '常见问题', link: '/faq', icon: 'circle-question' },
  { text: 'QQ群', link: 'https://qm.qq.com/q/LlHABKWhu4', icon: 'fa-brands fa-qq' }
])

export { shamrockNavbar }
