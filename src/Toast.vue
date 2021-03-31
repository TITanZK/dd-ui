<template>
  <div ref="wrapper" class="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div ref="line" class="line"></div>
    <span @click="onClickClose"
          class="close"
          v-if="closeButton">{{ closeButton.text }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    autoClose: {type: Boolean, default: true},
    autoCloseDelay: {type: Number, default: 50},
    enableHtml: {type: Boolean, default: false},
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    }
  },
  mounted() {
    this.resetLineStyle()
    this.execAutoClose()
  },
  methods: {
    resetLineStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
          `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  min-height: $toast-min-height;font-size: $font-size;line-height: 1.8;
  position: fixed;top: 0;left: 50%;transform: translateX(-50%);display: flex;align-items: center;
  border-radius: 4px;color: white;background: $toast-bg;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  .close {padding-left: 16px;cursor: pointer;flex-shrink: 0}
  .line {height: 100%;border: 1px solid #666;margin-left: 16px;}
  .message{padding: 6px 0;}
}


</style>