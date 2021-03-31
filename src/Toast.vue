<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    autoClose: {type: Boolean, default: true},
    autoCloseDelay: {type: Number, default: 5}
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    }
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  height: $height;font-size: $font-size;line-height: 1.8;
  position: fixed;top: 0;left: 50%;transform: translateX(-50%);display: flex;align-items: center;
  border-radius: 4px;color: white;background: $toast-bg;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
</style>