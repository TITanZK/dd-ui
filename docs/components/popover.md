---
title: Popover 弹出框
---

### Popover 弹出框

#### 样式预览
<popover-demo></popover-demo>

#### 使用方法
```vue
<template>
  <div class="wrapper">
    <d-popover>
      <template slot="content"> <div>这是一段内容,这是一段内容</div> </template>
      <d-button>上面弹出</d-button>
    </d-popover>
    <d-popover position="bottom">
      <template slot="content"> <div>这是一段内容,这是一段内容</div> </template>
      <d-button>下面弹出</d-button>
    </d-popover>
    <d-popover position="left">
      <template slot="content"> <div>这是一段内容,这是一段内容</div> </template>
      <d-button>左边弹出</d-button>
    </d-popover>
    <d-popover position="right">
      <template slot="content"> <div>这是一段内容,这是一段内容</div> </template>
      <d-button>右边弹出</d-button>
    </d-popover>
    <d-popover trigger="hover">
      <template slot="content"> <div>这是一段内容,这是一段内容</div> </template>
      <d-button>hover弹出</d-button>
    </d-popover>
    <d-popover trigger="click">
      <template slot="content"> <div>这是一段内容,这是一段内容</div> </template>
      <d-button>click弹出</d-button>
    </d-popover>
  </div>
</template>

<script>
import { Popover, Button } from 'ddui-dev'

export default {
  components: { 'd-popover': Popover, 'd-button': Button, },
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
            <td>position</td>
            <td>弹出框位置</td>
            <td>string</td>
            <td>top/bottom/left/right</td>
            <td>top</td>
        </tr>
        <tr>
            <td>trigger</td>
            <td>弹出框触发方式</td>
            <td>string</td>
            <td>click / hover</td>
            <td>click</td>
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