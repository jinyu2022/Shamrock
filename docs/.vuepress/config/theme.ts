import { hopeTheme } from 'vuepress-theme-hope'
import { shamrockNavbar } from './navbar'
import { shamrockSidebar } from './sidebar'

export default hopeTheme({
  favicon: '/shamrock.png',
  logo: '/shamrock.png',
  iconAssets: 'fontawesome-with-brands',
  repo: 'linxinrao/Shamrock',
  docsRepo: 'linxinrao/Shamrock',
  docsBranch: 'docs',
  docsDir: 'docs',
  plugins: {
    mdEnhance: {
      // 添加选项卡支持
      tabs: true,
    },
  },
  navbar: shamrockNavbar,
  sidebar: shamrockSidebar
})
