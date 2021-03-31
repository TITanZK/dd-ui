<template>
  <div ref="wrapper" class="toast" :class="toastClass">
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
    autoCloseDelay: {type: Number, default: 5},
    enableHtml: {type: Boolean, default: false},
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0
      }
    },
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
  computed: {
    toastClass() {
      return {[`position-${this.position}`]: true}
    }
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
      this.$emit('close')
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
  position: fixed;display: flex;align-items: center; padding: 0 16px;
  border-radius: 4px;color: white;background: $toast-bg;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  left: 50%;
  .close {padding-left: 16px;cursor: pointer;flex-shrink: 0}
  .line {height: 100%;border: 1px solid #666;margin-left: 16px;}
  .message {padding: 6px 0;}
  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom:0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top:50%;
    transform: translate(-50%,-50%);
    
  }
}


</style>