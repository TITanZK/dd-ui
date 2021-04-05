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
  },
  created() {
    // console.log('执行了')
    console.log(Button)
  },
  mounted() {
    // import('../../../src/Button').then(module=>{
    // console.log(module)
    // Vue.use(module)
    // })
  }
}

</script>
<style>
</style>