<template>
  <div>
    <d-row gutter="20">
      <d-col :span="6"><div class="grid-content bg-purple"></div></d-col>
      <d-col :span="6"><div class="grid-content bg-purple"></div></d-col>
      <d-col :span="6"><div class="grid-content bg-purple"></div></d-col>
      <d-col :span="6"><div class="grid-content bg-purple"></div></d-col>
    </d-row>
  </div>
</template>

<script>
import Row from "../../../src/Row"
import Col from "../../../src/Col"

export default {
  components: {
    'd-row': Row,
    'd-col': Col
  }
}
</script>

<style scoped lang="scss">
*{box-sizing: border-box}
.row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #d2d4d6;
}
.bg-purple {
  background: #c2c4c5;
}
.bg-purple-light {
  background: #aaabaf;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>