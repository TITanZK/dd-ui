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
  created() {
    this.eventBus.$on('update:selected',(item,vm)=>{
      console.log(item)
    })
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$color:blue;
.tabs-head {
  border: 1px solid red;
  display: flex;
  height: $tab-height;
  position: relative;
  >.line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $color;
    width: 100px;
  }
  justify-content: flex-start;
  >.actions-wrapper{
    margin-left: auto;
  }
}
</style>