import { navbar } from 'vuepress-theme-hope'

const shamrockNavbar = navbar([
  '/guide',
  '/advanced',
  '/api',
  '/message',
  '/event',
  { text: 'QQ群', link: 'https://qm.qq.com/q/LlHABKWhu4', icon: 'fa-brands fa-qq' }
])

export { shamrockNavbar }
