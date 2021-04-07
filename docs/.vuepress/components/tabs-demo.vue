<template>
  <div class="wrapper">
    <d-tabs :selected.sync="selectedTab">
      <d-tabs-head>
        <d-tabs-item name="tencent">腾讯视频</d-tabs-item>
        <d-tabs-item name="youku">优酷视频</d-tabs-item>
        <d-tabs-item name="iqiyi">爱奇艺视频</d-tabs-item>
        <d-tabs-item name="youTub" disabled>YouTub</d-tabs-item>
      </d-tabs-head>
      <d-tabs-body>
        <d-tabs-pane name="tencent">腾讯相关资讯</d-tabs-pane>
        <d-tabs-pane name="youku">优酷相关资讯</d-tabs-pane>
        <d-tabs-pane name="iqiyi">爱奇艺相关资讯</d-tabs-pane>
        <d-tabs-pane name="youTub">YouTub相关资讯</d-tabs-pane>
      </d-tabs-body>
    </d-tabs>
  </div>
</template>

<script>
import Tabs from "../../../src/Tabs"
import TabsBody from "../../../src/Tabs-body"
import TabsHead from "../../../src/Tabs-head"
import TabsItem from "../../../src/Tabs-item"
import TabsPane from "../../../src/Tabs-pane"

export default {
  data(){
    return {
      selectedTab: 'tencent'
    }
  },
  components: {
    'd-tabs': Tabs,
    'd-tabs-body': TabsBody,
    'd-tabs-head': TabsHead,
    'd-tabs-item': TabsItem,
    'd-tabs-pane': TabsPane
  }
}

</script>

<style scoped lang="scss">
*{box-sizing: border-box}
.wrapper{
  margin-top: 20px;
}
</style>