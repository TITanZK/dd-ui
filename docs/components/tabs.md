---
title: Tabs 标签页
---

### Tabs 标签页

#### 样式预览
<tabs-demo></tabs-demo>

#### 使用方法
未完成

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