<template>
  <div class="wrapper" :class="toastClass">
    <div ref="toast" class="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div ref="line" class="line"></div>
      <span @click="onClickClose" class="close"
            v-if="closeButton">{{ closeButton.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    enableHtml: {type: Boolean, default: false},
    autoClose: {
      type: [Number, Boolean],
      default: true,
      validator(value) {
        return value === false || typeof value === 'number';
      }
    },
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
          `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
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
@keyframes slide-up {
  0% {opacity: 0;transform: translateY(100%)}
  100% {opacity: 1;transform: translateY(0%)}
}

@keyframes slide-down {
  0% {opacity: 0;transform: translateY(-100%)}
  100% {opacity: 1;transform: translateY(0%)}
}

@keyframes fade-in {
  0% {opacity: 0}
  100% {opacity: 1}
}

.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 300ms;
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in $animation-duration;
  }
}

.toast {
  min-height: $toast-min-height;font-size: $font-size;line-height: 1.8;
  display: flex;align-items: center; padding: 0 16px;
  border-radius: 4px;color: white;background: $toast-bg;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .close {padding-left: 16px;cursor: pointer;flex-shrink: 0}
  .line {height: 100%;border: 1px solid #666;margin-left: 16px;}
  .message {padding: 6px 0;flex-shrink: 0}
}
</style>