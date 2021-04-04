<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
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
      if(this.$refs.contentWrapper
        && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
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
$border-radius: 4px;
.popover {
  display: inline-block;
  position: relative;
}

.content-wrapper {
  position: absolute;transform: translateY(-100%);
  border: 1px solid $border-color;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, .1));
  background: white;
  border-radius: $border-radius;max-width: 20em;
  padding: 0.5em 1em;margin-top: -10px;
  word-break: break-all;
  &::before, &::after {
    content: '';display: block;width: 0;height: 0;
    border: 10px solid transparent;position: absolute;left: 15px;
  }
  &::before {
    border-top-color: $border-color;top: 100%;
  }
  &::after {
    border-top-color: white;top: calc(100% - 1px);
  }
}
</style>