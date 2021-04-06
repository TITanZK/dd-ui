module.exports = {
  title: '多多 UI',
  description: '一个好用且精美的UI框架',
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    logo: '/assets/img/hero.png',
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/get-started/'},
      {text: 'GitHub', link: 'https://github.com/TITanZK/dd-ui'},
    ],
    sidebar: [
      {
        title: '快速上手',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
          '/components/popover',
          '/components/collapse'
        ]
      }
    ]
  }
}