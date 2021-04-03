<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs-head",
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      const {width,left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$color: #409EFF;
$border-color:#ddd;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  height: $tab-height;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: -1px;
    border-bottom: 1px solid $color;
    transition: all 300ms cubic-bezier(.645,.045,.355,1);
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0 1em;
  }
}
</style>