import { sidebar } from 'vuepress-theme-hope'

const children = {
  guide: ['getting-started', 'configuration', 'faq'],
  advanced: ['voice'],
  api: [
    'request-response',
    'account',
    'contact',
    'user',
    'message',
    'resources',
    'dispose',
    'group',
    'file',
    'other'
  ],
  message: [],
  event: []
}

const shamrockSidebar = sidebar([
  {
    text: '指南',
    prefix: 'guide',
    link: '/guide',
    icon: 'lightbulb',
    collapsible: true,
    children: children.guide
  },
  {
    text: '进阶',
    prefix: 'advanced',
    link: '/advanced',
    icon: 'gem',
    collapsible: true,
    children: children.advanced
  },
  {
    text: '接口',
    prefix: 'api',
    link: '/api',
    icon: 'laptop-code',
    collapsible: true,
    children: children.api
  },
  {
    text: '消息',
    prefix: 'message',
    link: '/message',
    icon: 'comment',
    collapsible: true,
    children: children.message
  },
  {
    text: '事件',
    prefix: 'event',
    link: '/event',
    icon: 'bell',
    collapsible: true,
    children: children.event
  }
])

export { shamrockSidebar }
