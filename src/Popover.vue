<template>
  <div class="popover" @click="onClick" ref="popover">
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
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      const {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + screenX + 'px'
      this.$refs.contentWrapper.style.top = top + scrollY + 'px'
    },
    onClickDocument(e) {
      if (this.$refs.popover
        && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) {return}
      this.close()    //这里的this不是document,vue帮我们做了封装
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
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