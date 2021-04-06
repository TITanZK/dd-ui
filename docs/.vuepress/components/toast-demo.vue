<template>
  <div>
    <d-row class="first">
      <d-button @click="showToast">默认</d-button>
      <d-button @click="showToastTop">上边</d-button>
      <d-button @click="showToastMiddle">中间</d-button>
      <d-button @click="showToastBottom">下边</d-button>
    </d-row>
    <d-row>
      <d-button @click="showToastHtml">可传HTML</d-button>
      <d-button @click="showToastAuto">设置10秒关闭</d-button>
      <d-button @click="showToastCloseButton">传入close</d-button>
    </d-row>
  </div>
</template>

<script>
import Vue from 'vue'
import Row from "../../../src/Row"
import Toast from "../../../src/Toast"
import Button from "../../../src/Button"
import Plugin from "../../../src/plugin"

Vue.use(Plugin)

export default {
  components: {
    'd-toast': Toast,
    'd-button': Button,
    'd-row': Row
  },
  methods: {
    showToast() {
      this.$toast('我是 message')
    },
    showToastTop() {
      this.$toast('我是 message', {position: 'top'})
    },
    showToastMiddle() {
      this.$toast('我是 message', {position: 'middle'})
    },
    showToastBottom() {
      this.$toast('我是 message', {position: 'bottom'})
    },
    showToastHtml() {
      this.$toast('<i>我是 message</i>', {enableHtml: true})
    },
    showToastAuto() {
      this.$toast('我是 message', {autoClose: 10})
    },
    showToastCloseButton() {
      this.$toast('我是 message',
        {
          closeButton: {
            text: '点击关闭，执行回调', callback() {
              console.log('我是回调！')
            }
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.first {
  margin-top: 20px;
}

.row {
  > * {
    margin-right: 20px;
  }
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>