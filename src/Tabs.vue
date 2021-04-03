<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "Tabs",
  props: {
    selected: {type: String, required: true},
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {eventBus: new Vue()}
  },
  provide() {
    return {eventBus: this.eventBus}
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$children.length === 0) {
        console && console.warn && console.warn('tabs的子组件应该为tabs-head和tabs-body')
      }
      if (vm.$options.name === 'Tabs-head') {
        vm.$children.forEach(childVm => {
          if (childVm.$options.name === 'Tabs-item' && childVm.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, childVm)
          }
        })
      }
    })
  }
}
</script>

<style scoped lang="scss">
.tabs {

}
</style>