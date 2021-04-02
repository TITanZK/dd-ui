<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs-pane",
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected',name=>{
      console.log(name)
    })
  },
}
</script>

<style scoped lang="scss">
.tabs-pane {

}
</style>