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
  created() {
    // this.$emit('update:selected')
  }
}
</script>

<style scoped lang="scss">
.tabs {

}
</style>