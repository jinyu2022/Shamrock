import { hopeTheme } from 'vuepress-theme-hope'
import { shamrockNavbar } from './navbar'
import { shamrockSidebar } from './sidebar'

export default hopeTheme({
  logo: '/logo.png',
  iconAssets: 'fontawesome-with-brands',
  repo: 'linxinrao/Shamrock',
  docsRepo: 'linxinrao/Shamrock',
  docsBranch: 'docs',
  docsDir: 'docs',
  navbar: shamrockNavbar,
  sidebar: shamrockSidebar
})
