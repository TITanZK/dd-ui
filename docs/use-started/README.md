---
title: 快速使用
---

::: tip 提示
由于本组件库所有组件是依赖 CSS3 盒模型设计的，在使用之前请确保本地项目 CSS 盒模型为 border-box
:::

在引入组件之前请先引入样式文件，你可以选择在 `main.js` 中全局引入(推荐)，也可在组件中引用。
```javascript 1.8
import Vue from 'vue'
import App from './App.vue'

import 'ddui-dev/dist/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

好了，现在你可以在自己的组件中引入本组件库了，具体使用请看示例！