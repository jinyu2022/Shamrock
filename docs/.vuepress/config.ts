import { defineUserConfig } from 'vuepress'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import theme from './config/theme'

export default defineUserConfig({
  title: 'Shamrock 使用文档',
  lang: 'zh-CN',
  port: 1421,
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  theme,
  plugins: [
    searchProPlugin({
      indexContent: true,
      hotKeys: []
    })
  ]
})
