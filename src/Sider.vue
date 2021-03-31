<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <icon name="right" @click.native="visible = false"></icon>
    </div>
  </transition>
</template>

<script>
import Icon from "./Icon"

export default {
  name: "Sider",
  components: {Icon},
  data() {
    return {visible: true}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.sider {
  position: relative;
  > .d-icon {width: 1.5em;height: 1.5em;
    position: absolute;top: 0;right: 0;}
}

.slide-enter-active, .slide-leave-active {transition: all .4s;}
</style>