import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tov ui",
  description: "This is a vue component library",
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/tov-ui/src/:comp/(.*)': 'components/:comp/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
    'packages/icons/docs/(.*)': 'components/icons/(.*)',
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduce'},
      { text: '组件', link: '/components/'},
      { text: '工具', link: '/utils/'},
    ],

    sidebar: {
      '/components/': [
        {
          text: 'Basic 基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button/' },
            { text: 'icon 图标', link: '/components/icons/' }
          ]
        },
        {
          text: 'Form 表单组件',
          items: [
            { text: 'Input 输入框', link: '/components/input/' }
          ]
        },
        {
          text: 'Feedback 反馈组件',
          items: [
            { text: 'Tooltip 文字提示', link: '/components/tooltip/' },
            { text: 'notification 通知', link: '/components/notification/' }
          ]
        },
        {
          text: 'Data 数据展示',
          items: [
            { text: 'Table 表格', link: '/components/table/' },
            { text: 'virtual-list 虚拟列表', link: '/components/virtual-list/' }
          ]
        }
      ],
      '/utils': [
        {
          text: 'genClass',
          link: '/utils/gen-class',
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
