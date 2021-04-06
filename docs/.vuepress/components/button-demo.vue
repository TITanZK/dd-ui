<template>
  <div>
    <d-row class="first">
      <d-button>默认按钮</d-button>
      <d-button icon="settings">有图标</d-button>
      <d-button icon="settings" icon-position="right">图标右</d-button>
    </d-row>
    <d-row class="button-wrapper">
      <d-button :loading="loading1">有状态</d-button>
      <d-button :loading="loading2" @click="loading2 = !loading2">点击触发</d-button>
    </d-row>
    <d-row class="button-wrapper">
      <d-button-group>
        <d-button icon="left" icon-position="left">上一页</d-button>
        <d-button>更多</d-button>
        <d-button icon="right" icon-position="right">下一页</d-button>
      </d-button-group>
    </d-row>
  </div>
</template>

<script>
import Button from "../../../src/Button"
import ButtonGroup from '../../../src/Button-group'
import Row from "../../../src/Row"

export default {
  data() {
    return {
      loading1: true,
      loading2: false,
    }
  },
  components: {
    'd-button': Button,
    'd-button-group': ButtonGroup,
    'd-row': Row
  }
}

</script>

<style scoped lang="scss">
.first{
  margin-top: 20px;
}
.row {
  > *{
    margin-right: 20px;
  }
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>