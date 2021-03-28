<template>
  <button class="d-button" :class="{[`icon-${iconPosition}`]:true}">
    <d-icon class="icon" :name="icon"/>
    <d-icon class="loading" name="loading"/>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    icon: {},
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
@keyframes spin {
  0% {transform: rotate(0deg)}
  100%{ transform: rotate(360deg)}
}
.d-button {
  .loading{
    animation: spin 2s infinite linear;
  }
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  vertical-align: middle; //css真的贱，不对齐是真的烦
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    border-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: .3em
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }

    > .content {
      order: 1;
    }
  }
}

</style>