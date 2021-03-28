<template>
  <svg class="d-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props:['name']
}
</script>

<style scoped>
.d-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>