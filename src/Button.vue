<template>
  <button class="d-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <d-icon class="icon" v-if="icon && !loading" :name="icon"/>
    <d-icon class="loading icon" v-if="loading" name="loading"/>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./Icon"

export default {
  components: {
    'd-icon': Icon
  },
  name: "Button",
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validate(value) {//当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style scoped lang="scss">
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #999;
$border-color: #999;
$border-color-hover: #666;

@keyframes spin {
  0% {transform: rotate(0deg)}
  100% { transform: rotate(360deg)}
}

.d-button {
  .loading {animation: spin 2s infinite linear;}
  height: $button-height;padding: 0 1em;font: inherit;border-radius: $border-radius;
  border: 1px solid $border-color;background: $button-bg;
  vertical-align: middle; //css真的贱，不对齐是真的烦
  display: inline-flex;
  justify-content: center;align-items: center;

  &:hover {border-color: $border-color-hover;}
  &:active {border-color: $button-active-bg;}
  &:focus {outline: none;}

  > .icon {order: 1;margin-right: .3em}
  > .content {order: 2;}
  &.icon-right {
    > .icon {order: 2;margin-right: 0;margin-left: .3em;}
    > .content {order: 1;}
  }
}
</style>