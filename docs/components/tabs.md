---
title: Tabs 标签页
---

### Tabs 标签页

#### 样式预览
<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>

#### 使用方法
```vue
<template>
  <div class="wrapper">
    <d-tabs :selected.sync="selectedTab">
      <d-tabs-head>
        <d-tabs-item name="tencent">腾讯视频</d-tabs-item>
        <d-tabs-item name="youku">优酷视频</d-tabs-item>
        <d-tabs-item name="iqiyi">爱奇艺视频</d-tabs-item>
        <d-tabs-item name="youTub" disabled>youTub</d-tabs-item>
      </d-tabs-head>
      <d-tabs-body>
        <d-tabs-pane name="tencent">腾讯相关资讯</d-tabs-pane>
        <d-tabs-pane name="youku">优酷相关资讯</d-tabs-pane>
        <d-tabs-pane name="iqiyi">爱奇艺相关资讯</d-tabs-pane>
        <d-tabs-pane name="youTub">youTub相关资讯</d-tabs-pane>
      </d-tabs-body>
    </d-tabs>
  </div>
</template>

<script>
import { Tabs, TabsBody, TabsHead, TabsItem, TabsPane } from 'ddui-dev'

export default {
  data() {
    return { selectedTab: 'tencent', }
  },
  components: {
    'd-tabs': Tabs,
    'd-tabs-body': TabsBody,
    'd-tabs-head': TabsHead,
    'd-tabs-item': TabsItem,
    'd-tabs-pane': TabsPane,
  },
}
</script>
```

::: tip 提示 
Tabs-head、Tabs-body 只作为 Tabs 的结构而存在
:::

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
        <tr><td colspan="5">Tabs 接受属性</td></tr>
        <tr>
            <td>selected</td>
            <td>默认需要高亮的 item，必须属性</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>direction</td>
            <td>排列方式（水平/垂直）<strong>待开发</strong></td>
            <td>string</td>
            <td>horizontal/vertical</td>
            <td>—</td>
        </tr>
        <tr><td colspan="5">Tabs-pane 接受属性</td></tr>
        <tr>
            <td>name</td>
            <td>选中后出现内容，必须属性</td>
            <td>string/number</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr><td colspan="5">Tabs-item 接受属性</td></tr>
        <tr>
            <td>disabled</td>
            <td>禁止选中</td>
            <td>boolean</td>
            <td>false / true</td>
            <td>false</td>
        </tr>
        <tr>
            <td>name</td>
            <td>方便选中后出现内容，必须属性</td>
            <td>string/number</td>
            <td>—</td>
            <td>—</td>
        </tr>
    </tbody>
</table>