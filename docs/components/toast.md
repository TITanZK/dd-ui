---
title: Toast 消息提示
---

### Toast 消息提示

#### 样式预览
<toast-demo></toast-demo>

#### 使用方法
未完成

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