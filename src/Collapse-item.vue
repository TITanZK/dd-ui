<template>
  <div class="collapse-item">
    <div class="title" @click="toggle" :data-name="name">
      <span>{{ title }}</span>
      <d-icon class="collapse-icon" :class="iconTransition" name="right"/>
    </div>
    <d-spread :visible="open">
      <div class="content">
        <slot></slot>
      </div>
    </d-spread>
  </div>
</template>

<script>
import spread from "./spread"
import Icon from "./Icon"

export default {
  name: "Collapse-item",
  props: {
    title: {type: String, required: true},
    name: {type: String, required: true}
  },
  components: {'d-spread': spread, 'd-icon': Icon},
  data() {
    return {open: false}
  },
  inject: ['eventBus'],
  computed: {
    iconTransition() {
      return {[`icon-${this.open}`]: true}
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', names => {
      this.open = names.indexOf(this.name) >= 0
    })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$border-color: #ddd;
$border-radius: 4px;
.collapse-item {
  > .title {
    border: 1px solid $border-color;border-bottom: none;margin: -1px -1px 0;
    padding: 4px 0 4px 8px;background: white;color: #303133;
    font-size: 13px;font-weight: 500;min-height: 48px;
    display: flex;justify-content: space-between;align-items: center;
    > .collapse-icon {
      margin-right: 15px;
      width: 1em;
      height: 1em;
      transition: transform .3s;
    }
    >.icon-true{
      transform: rotateZ(90deg);
    }
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom: none;
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .content {
    font-size: 13px;
    color: #303133;
    line-height: 1.769230769230769;
    padding: 4px 0 18px 8px;
  }
}
</style>