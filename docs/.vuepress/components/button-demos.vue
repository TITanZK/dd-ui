<template>
  <div>
    <button>按钮</button>
    <d-button>默认按钮</d-button>
  </div>
</template>

<script>
import Button from "../../../src/Button"

export default {
  components: {
    'd-button': Button,
  }
}

</script>

<style>
</style>