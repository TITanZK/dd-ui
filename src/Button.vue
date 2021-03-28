<template>
  <button class="d-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ['icon', 'iconPosition']
}
</script>

<style scoped lang="scss">
.d-button {
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  vertical-align: middle;//css真的贱，不对齐是真的烦
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
    >.content{
      order: 1;
    }
  }
}

</style>