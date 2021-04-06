<template>
  <div class="wrapper">
    <d-popover>
      <template slot="content">
        <div>这是一段内容,这是一段内容</div>
      </template>
      <d-button>上面弹出</d-button>
    </d-popover>
    <d-popover position="bottom">
      <template slot="content">
        <div>这是一段内容,这是一段内容</div>
      </template>
      <d-button>下面弹出</d-button>
    </d-popover>
    <d-popover position="left">
      <template slot="content">
        <div>这是一段内容,这是一段内容</div>
      </template>
      <d-button>左边弹出</d-button>
    </d-popover>
    <d-popover position="right">
      <template slot="content">
        <div>这是一段内容,这是一段内容</div>
      </template>
      <d-button>右边弹出</d-button>
    </d-popover>
    <br/>
    <br/>
    <d-popover trigger="hover">
      <template slot="content">
        <div>这是一段内容,这是一段内容</div>
      </template>
      <d-button>hover弹出</d-button>
    </d-popover>
    <d-popover trigger="click">
      <template slot="content">
        <div>这是一段内容,这是一段内容</div>
      </template>
      <d-button>click弹出</d-button>
    </d-popover>
  </div>
</template>

<script>
import Popover from "../../../src/Popover"
import Button from "../../../src/Button"

export default {
  data() {
    return {}
  },
  components: {
    'd-popover': Popover,
    'd-button': Button
  }
}

</script>

<style scoped lang="scss">
* {box-sizing: border-box}

.wrapper {
  margin-top: 20px;
  > *{
    margin-right: 20px;
  }
}
</style>