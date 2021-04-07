---
title: Layout 布局
---

### Layout 布局

#### 样式预览
<layout-demo></layout-demo>

#### 使用方法
```vue
<template>
  <div class="wrapper">
    <d-layout>
      <d-header>Header</d-header>
      <d-content>Content</d-content>
    </d-layout>

    <d-layout>
      <d-header>Header</d-header>
      <d-content>Content</d-content>
      <d-footer>Footer</d-footer>
    </d-layout>

    <d-layout>
      <d-sider>Sider</d-sider>
      <d-content>Content</d-content>
    </d-layout>

    <d-layout>
      <d-header>Header</d-header>
      <d-layout>
        <d-sider>Sider</d-sider>
        <d-content>Content</d-content>
      </d-layout>
    </d-layout>

    <d-layout>
      <d-header>Header</d-header>
      <d-layout>
        <d-sider>Sider</d-sider>
        <d-layout>
          <d-content>Content</d-content>
          <d-footer>Footer</d-footer>
        </d-layout>
      </d-layout>
    </d-layout>

    <d-layout>
      <d-sider>Sider</d-sider>
      <d-layout>
        <d-header>Header</d-header>
        <d-content>Content</d-content>
      </d-layout>
    </d-layout>

    <d-layout>
      <d-sider>Sider</d-sider>
      <d-layout>
        <d-header>Header</d-header>
        <d-content>Content</d-content>
        <d-footer>Footer</d-footer>
      </d-layout>
    </d-layout>
  </div>
</template>

<script>
import { Layout, Sider, Header, Content, Footer } from 'ddui-dev'

export default {
  components: {
    'd-layout': Layout, 'd-sider': Sider,
    'd-header': Header, 'd-content': Content, 'd-footer': Footer,
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  > * { margin-bottom: 20px; }
  > :first-child { margin-top: 20px; }
  > :last-child { margin-bottom: 0; }
}
.header, .footer {
  background-color: #b3c0d1; color: #333;
  text-align: center; line-height: 60px;
}
.sider { 
  background-color: #d3dce6; color: #333; width: 80px;
  text-align: center; line-height: 200px;
}
.content { 
  background-color: #e9eef3; color: #333;
  text-align: center; line-height: 160px; 
}
body > .layout { margin-bottom: 40px; }
.layout:nth-child(5) .sider,
.layout:nth-child(6) .sider { line-height: 260px; }
.layout:nth-child(7) .sider { line-height: 320px; }
</style>
```