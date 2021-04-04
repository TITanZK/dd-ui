<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "Popover",
  data() {
    return {visible: false}
  },
  mounted() {
  },
  methods: {
    xxx() {
      this.visible = !this.visible
      if (this.visible === true) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          const {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + screenX + 'px'
          this.$refs.contentWrapper.style.top = top + scrollY + 'px'

          let eventHandle = () => {
            this.visible = false
            document.removeEventListener('click', eventHandle)// 删除监听器
          }
          document.addEventListener('click', eventHandle)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
$border-color: #ebeef5;
.popover {
  display: inline-block;
  position: relative;
}

.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  border: 1px solid $border-color;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}
</style>