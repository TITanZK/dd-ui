<template>
  <div>
    <d-row>
      <d-col :span="10" :ipad="{span:8}" :narrow-pc="{span:8}" :pc="{span:8}" :wide-pc="{span:5}">
        <div class="grid-content bg-purple"></div>
      </d-col>
      <d-col :span="8" :ipad="{span:8}" :narrow-pc="{span:14}" :pc="{span:10}" :wide-pc="{span:12}">
        <div class="grid-content bg-purple-light"></div>
      </d-col>
      <d-col :span="6" :ipad="{span:8}" :narrow-pc="{span:2}" :pc="{span:6}" :wide-pc="{span:7}">
        <div class="grid-content bg-purple"></div>
      </d-col>
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
* {box-sizing: border-box}

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