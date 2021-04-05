<template>
  <div class="d-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button-group",
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLocaleLowerCase()
      if (name !== 'button') {
        console.log(`d-button-group 的子元素应是 g-button,你写的是 ${name}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$border-radius: 4px;

.d-button-group {
  display: inline-flex;vertical-align: middle;
  > .d-button {
    border-radius: 0;
    &:not(:first-child) {margin-left: -1px;}
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {position: relative;z-index: 1;}
  }
}
</style>