<template>
  <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave"
              @leave="leave" @after-leave="afterLeave">
    <div class="d-spread" v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'xSpread',
  props: {
    visible: {type: Boolean, required: true},
    duration: {type: [Number, String], default: 300}
  },
  data() {
    return {
      dataset: {
        oldPaddingTop: '',
        oldPaddingBottom: '',
        oldPaddingLeft: '',
        oldPaddingRight: '',
        oldOverflow: ''
      }
    }
  },
  computed: {
    verticalTransition() {
      return `${+this.duration}ms height ease-in-out, ${+this.duration}ms padding-top ease-in-out, ${+this.duration}ms padding-bottom ease-in-out`
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.transition = this.verticalTransition
      this.dataset.oldPaddingTop = el.style.paddingTop
      this.dataset.oldPaddingBottom = el.style.paddingBottom
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    },
    enter(el) {
      this.dataset.oldOverflow = el.style.overflow
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
      } else {
        el.style.height = ''
      }
      el.style.paddingTop = this.dataset.oldPaddingTop
      el.style.paddingBottom = this.dataset.oldPaddingBottom
      el.style.overflow = 'hidden'
    },
    afterEnter(el) {
      el.style.transition = ''
      el.style.overflow = this.dataset.oldOverflow
    },
    beforeLeave(el) {
      this.dataset.oldOverflow = el.style.overflow
      this.dataset.oldPaddingTop = el.style.paddingTop
      this.dataset.oldPaddingBottom = el.style.paddingBottom
      el.style.height = el.scrollHeight + 'px'
      el.style.overflow = 'hidden'
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.transition = this.verticalTransition
        el.style.height = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      }
    },
    afterLeave(el) {
      el.style.transition = ''
      el.style.overflow = this.dataset.oldOverflow
      el.style.height = ''
      el.style.paddingTop = this.dataset.oldPaddingTop
      el.style.paddingBottom = this.dataset.oldPaddingBottom
    }
  }
}
</script>