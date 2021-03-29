<template>
  <label class="wrapper">
    <input :value="value" :class="{error}" type="text" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </label>
</template>

<script>
import Icon from "./Icon"

export default {
  name: "Input",
  components: {Icon},
  props: {
    value: {type: String},
    disabled: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    error: {type: String}
  }
}
</script>

<style scoped lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;display: inline-flex;align-items: center;
  > :not(:last-child) {margin-right: .5em;}
  > .icon-error {fill: $red}
  > .error-message {color: $red;}
  > input {
    height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-style: inherit;
    &:hover {border-color: $border-color-hover;}
    &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
    &[disabled], &[readonly] {border-color: #ccc;color: #ccc;cursor: not-allowed;}
    &.error {border-color: $red}
  }
}
</style>