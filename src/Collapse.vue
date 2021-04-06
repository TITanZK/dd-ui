<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "Collapse",
  data() {
    return {
      eventBus: new Vue()
    }
  },
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:addSelected', name => {
      let selectedClone = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        selectedClone = [name]
      } else {
        selectedClone.push(name)
      }
      this.$emit('update:selected', selectedClone)
      this.eventBus.$emit('update:selected', selectedClone)
    })
    this.eventBus.$on('update:removeSelected', name => {
      let selectedClone = JSON.parse(JSON.stringify(this.selected))
      const index = this.selected.indexOf(name)
      selectedClone.splice(index, 1)
      this.$emit('update:selected', selectedClone)
      this.eventBus.$emit('update:selected', selectedClone)
    })
  }
}
</script>

<style scoped lang="scss">
$border-color: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $border-color;
  border-bottom: none;
  border-radius: $border-radius;
}
</style>