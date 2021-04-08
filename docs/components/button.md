---
title: Button 按钮
---

### Button 按钮 

#### 样式预览
<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>

#### 使用方法
```vue
<template>
  <div>
    <d-row class="first">
      <d-button>默认按钮</d-button>
      <d-button icon="settings">有图标</d-button>
      <d-button icon="settings" icon-position="right">图标右</d-button>

      <d-button :loading="loading1">有状态</d-button>
      <d-button :loading="loading2" @click="loading2 = !loading2">点击触发</d-button>

      <d-button-group>
        <d-button icon="left" icon-position="left">上一页</d-button>
        <d-button>更多</d-button>
        <d-button icon="right" icon-position="right">下一页</d-button>
      </d-button-group>
    </d-row>
  </div>
</template>

<script>
import { Button, ButtonGroup, Row } from 'ddui-dev'

export default {
  data() {
    return {
      loading1: true,
      loading2: false,
    }
  },
  components: {
    'd-button': Button,
    'd-button-group': ButtonGroup,
    'd-row': Row,
  },
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
            <td>icon</td>
            <td>图标</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>iconPosition</td>
            <td>图标位置</td>
            <td>string</td>
            <td>left / right</td>
            <td>left</td>
        </tr>
        <tr>
            <td>loading</td>
            <td>按钮状态</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
    </tbody>
</table>