<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper"
         :class="{[`position-${position}`]:true}" v-if="visible">
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
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    }
  },
  methods: {
    positionContent() {
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      const {left, top, height, width} = triggerWrapper.getBoundingClientRect()
      const {height: height2} = contentWrapper.getBoundingClientRect()
      const positionObject = {
        top: {
          top: top + window.scrollY,
          left: left + window.screenX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.screenX
        },
        left: {
          top: top + (height - height2) / 2 + window.scrollY,
          left: left + window.screenX
        },
        right: {
          top: top + (height - height2) / 2 + window.scrollY,
          left: left + width + window.screenX
        }
      }
      contentWrapper.style.left = positionObject[this.position].left + 'px'
      contentWrapper.style.top = positionObject[this.position].top + 'px'
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
.popover {display: inline-block;position: relative;}

.content-wrapper {
  position: absolute;border: 1px solid $border-color;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, .1));
  background: white;border-radius: $border-radius;max-width: 20em;
  padding: 0.5em 1em;word-break: break-all;

  &::before, &::after {
    content: '';display: block;width: 0;height: 0;
    border: 10px solid transparent;position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before, &::after {left: 15px;}
    &::before {border-top-color: $border-color;top: 100%;}
    &::after {border-top-color: white;top: calc(100% - 1px);}
  }
  &.position-bottom {
    margin-top: 10px;
    &::before, &::after {left: 15px;}
    &::before {border-bottom-color: $border-color;bottom: 100%;}
    &::after {border-bottom-color: white;bottom: calc(100% - 1px);}
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before, &::after {transform: translateY(-50%);top: 50%;}
    &::before {border-left-color: $border-color;left: 100%;}
    &::after {border-left-color: white;left: calc(100% - 1px);}
  }
  &.position-right {
    margin-left: 10px;
    &::before, &::after {transform: translateY(-50%);top: 50%;}
    &::before {border-right-color: $border-color;right: 100%;}
    &::after {border-right-color: white;right: calc(100% - 1px);}
  }
}
</style>