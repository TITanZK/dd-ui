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
import Layout from "../../../src/Layout"
import Sider from "../../../src/Sider"
import Content from "../../../src/Content"
import Header from "../../../src/Header"
import Footer from "../../../src/Footer"

export default {
  components: {
    'd-layout': Layout,
    'd-sider': Sider,
    'd-header': Header,
    'd-content': Content,
    'd-footer': Footer
  }
}

</script>

<style scoped lang="scss">
.wrapper{
  > *{
    margin-bottom: 20px;
  }
  >:first-child{
    margin-top: 20px;
  }
  >:last-child{
    margin-bottom: 0;
  }
}
.header, .footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.sider {
  width: 80px;
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.content {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .layout {
  margin-bottom: 40px;
}

.layout:nth-child(5) .sider,
.layout:nth-child(6) .sider {
  line-height: 260px;
}

.layout:nth-child(7) .sider {
  line-height: 320px;
}
</style>