<template>
  <div class="wrapper">
    <d-collapse :selected.sync="selectedItem">
      <d-collapse-item title="李白" name="1">君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。</d-collapse-item>
      <d-collapse-item title="杜甫" name="2">人才虽高，不务学问，不能致圣。刘向十日画一水，五日画一石。</d-collapse-item>
      <d-collapse-item title="曹植" name="3">其形也，翩若惊鸿，婉若游龙，荣曜秋菊，华茂春松。髣髴兮若轻云之蔽月，飘飖兮若流风之回雪。</d-collapse-item>
    </d-collapse>
    <h5>支持单个展开</h5>
    <d-collapse :selected.sync="selectedItem" single>
      <d-collapse-item title="李白" name="1">君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。</d-collapse-item>
      <d-collapse-item title="杜甫" name="2">人才虽高，不务学问，不能致圣。刘向十日画一水，五日画一石。</d-collapse-item>
      <d-collapse-item title="曹植" name="3">其形也，翩若惊鸿，婉若游龙，荣曜秋菊，华茂春松。髣髴兮若轻云之蔽月，飘飖兮若流风之回雪。</d-collapse-item>
    </d-collapse>
  </div>
</template>

<script>
import Collapse from "../../../src/Collapse"
import CollapseItem from "../../../src/Collapse-item"

export default {
  data(){
    return {
      selectedItem:['3']
    }
  },
  components: {
    'd-collapse': Collapse,
    'd-collapse-item': CollapseItem
  }
}

</script>

<style scoped lang="scss">
* {box-sizing: border-box}

.wrapper {
  margin: 20px 0 48px;
  > * {
    margin-right: 20px;
  }
}
</style>