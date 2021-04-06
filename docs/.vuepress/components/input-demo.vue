<template>
  <div>
    <d-row>
      <d-input></d-input>
      <d-input value="你好"></d-input>
    </d-row>
    <d-row>
      <d-input value="你好" disabled></d-input>
      <d-input value="你好" readonly></d-input>
    </d-row>
    <d-row>
      <d-input value="你好" error="昵称最少2个字"></d-input>
    </d-row>
    <d-row class="content">
      <d-input v-model="message"></d-input>
      <span>{{ message }}</span>
    </d-row>
  </div>
</template>

<script>
import Input from "../../../src/Input"
import Row from "../../../src/Row"

export default {
  data() {
    return {
      message: '你好'
    }
  },
  components: {
    'd-input': Input,
    'd-row': Row
  }
}

</script>
<style scoped lang="scss">
*{box-sizing: border-box}
.row {
  > *{
    margin-right: 20px;
  }
  margin-bottom: 20px;
  &:first-child{
    margin-top: 20px;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
.content{
  display: flex;
  align-items: center;
}
</style>