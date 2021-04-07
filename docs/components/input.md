---
title: Input 文本输入框
---

### Input 文本输入框 

#### 样式预览
<input-demo></input-demo>

#### 使用方法
```vue
<template>
  <div>
      <d-input></d-input>
      <d-input value="你好"></d-input>
      <d-input value="你好" disabled></d-input>
      <d-input value="你好" readonly></d-input>
      <d-input value="你好" error="昵称最少2个字"></d-input>
      <d-input v-model="message"></d-input>
      <span>{{ message }}</span>
  </div>
</template>

<script>
import {Input,Row} from 'ddui-dev'

export default {
  components: { 'd-input': Input, 'd-row': Row },
  data() {
    return { message: '你好' }
  }
}
</script>
```

#### Attributes
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
            <td>value / v-model</td>
            <td>绑定值</td>
            <td>string / number</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>禁用</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>readonly</td>
            <td>原生属性，是否只读</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>error</td>
            <td>输入状态</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
        </tr>
    </tbody>
</table>

#### Input Events
<table>
    <thead>
        <tr>
            <th>事件名称</th>
            <th>说明</th>
            <th>回调参数</th>
        </tr>
     </thead>
    <tbody>
        <tr>
            <td>change</td>
            <td>仅在输入框失去焦点或用户按下回车时触发</td>
            <td>(value: string | number)</td>
        </tr>
        <tr>
            <td>input</td>
            <td>在 Input 值改变时触发</td>
            <td>(value: string | number)</td>
        </tr>
        <tr>
            <td>focus</td>
            <td>在 Input 获得焦点时触发</td>
            <td>(event: Event)</td>
        </tr>
        <tr>
            <td>blur</td>
            <td>在 Input 失去焦点时触发</td>
            <td>(event: Event)</td>
        </tr>
    </tbody>
</table>