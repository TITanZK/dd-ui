---
title: Toast 消息提示
---

### Toast 消息提示

#### 样式预览
<toast-demo></toast-demo>

#### 使用方法
```vue
<template>
  <div>
    <d-row class="first">
      <d-button @click="showToast">默认</d-button>
      <d-button @click="showToastTop">上边</d-button>
      <d-button @click="showToastMiddle">中间</d-button>
      <d-button @click="showToastBottom">下边</d-button>
    </d-row>
    <d-row>
      <d-button @click="showToastHtml">可传HTML</d-button>
      <d-button @click="showToastAuto">设置10秒关闭</d-button>
      <d-button @click="showToastCloseButton">传入close</d-button>
    </d-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast, Button, Row, Plugin } from 'ddui-dev'

Vue.use(Plugin)

export default {
  components: { 'd-toast': Toast, 'd-button': Button, 'd-row': Row, },
  methods: {
    showToast() { this.$toast('我是 message') },

    showToastTop() { this.$toast('我是 message', { position: 'top' }) },

    showToastMiddle() { this.$toast('我是 message', { position: 'middle' }) },

    showToastBottom() { this.$toast('我是 message', { position: 'bottom' }) },

    showToastHtml() { this.$toast('<i>我是 message</i>', { enableHtml: true }) },

    showToastAuto() { this.$toast('我是 message', { autoClose: 10 }) },

    showToastCloseButton() {
      this.$toast('我是 message', {
        closeButton: {
          text: '点击关闭，执行回调',
          callback() { console.log('我是回调！') },
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.first { margin-top: 20px; }
.row {
  margin-bottom: 20px;
  > * { margin-right: 20px; }
  &:last-child { margin-bottom: 0; }
}
</style>
```

#### $toast(message,toastOptions)参数
<table>
    <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
        </tr>
     </thead>
    <tbody>
        <tr>
            <td>message</td>
            <td>传入的消息文字</td>
            <td>string / VNode</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>toastOptions</td>
            <td>toast 选项</td>
            <td>object</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td colspan="5">下面为 toastOptions 的接受参数</td>
        </tr>
        <tr>
            <td>position</td>
            <td>消息出现位置</td>
            <td>string</td>
            <td>top / middle / bottom</td>
            <td>top</td>
        </tr>
        <tr>
            <td>autoClose</td>
            <td>是否自动关闭</td>
            <td>boolean / number</td>
            <td>number / false / true</td>
            <td>5</td>
        </tr>
        <tr>
            <td>enableHtml</td>
            <td>message 含有标签</td>
            <td>boolean</td>
            <td>false / true</td>
            <td>false</td>
        </tr>
        <tr>
            <td>closeButton</td>
            <td>点击关闭的回调</td>
            <td>object</td>
            <td>—</td>
            <td></td>
        </tr>
        <tr>
            <td colspan="5">默认值：<code>closeButton: {text:'关闭', callback: undefined}</code></td>
        </tr>
    </tbody>
</table>