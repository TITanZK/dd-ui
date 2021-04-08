---
title: Collapse 手风琴
---

### Collapse 手风琴

#### 样式预览
<ClientOnly>
  <collapse-demo></collapse-demo>
</ClientOnly>

#### 使用方法
```vue
<template>
  <div class="wrapper">
    <d-collapse :selected.sync="selectedItem">
      <d-collapse-item title="李白" name="1">
        <span>君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。</span>
        <span>人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。</span>
      </d-collapse-item>
      <d-collapse-item title="杜甫" name="2">
        <span>焉知二十载，重上君子堂。昔别君未婚，儿女忽成行。怡然敬父执，问我来和方。问答未及已，儿女罗酒浆。</span>
        <span>夜雨剪春韭，新炊间黄粱。主称会面难，一举累十觞。十觞亦不醉，感子故意长。明月隔山岳，世事两茫茫。</span>
      </d-collapse-item>
      <d-collapse-item title="曹植" name="3">
        <span>其形也，翩若惊鸿，婉若游龙。荣曜秋菊，华茂春松。髣髴兮若轻云之蔽月，飘飖兮若流风之回雪。</span>
        <span>远而望之，皎若太阳升朝霞；迫而察之，灼若芙蕖出渌波。秾纤得衷，修短合度。肩若削成，腰如约素。延颈秀项，皓质呈露。</span>
      </d-collapse-item>
    </d-collapse>
    <d-collapse :selected.sync="selectedItem" single>
      <d-collapse-item title="李白" name="1">
        <span>君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。</span>
        <span>人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。</span>
      </d-collapse-item>
      <d-collapse-item title="杜甫" name="2">
        <span>焉知二十载，重上君子堂。昔别君未婚，儿女忽成行。怡然敬父执，问我来和方。问答未及已，儿女罗酒浆。</span>
        <span>夜雨剪春韭，新炊间黄粱。主称会面难，一举累十觞。十觞亦不醉，感子故意长。明月隔山岳，世事两茫茫。</span>
      </d-collapse-item>
      <d-collapse-item title="曹植" name="3">
        <span>其形也，翩若惊鸿，婉若游龙。荣曜秋菊，华茂春松。髣髴兮若轻云之蔽月，飘飖兮若流风之回雪。</span>
        <span>远而望之，皎若太阳升朝霞；迫而察之，灼若芙蕖出渌波。秾纤得衷，修短合度。肩若削成，腰如约素。延颈秀项，皓质呈露。</span>
      </d-collapse-item>
    </d-collapse>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from 'ddui-dev'

export default {
  data() {
    return { selectedItem: ['3'], }
  },
  components: { 'd-collapse': Collapse, 'd-collapse-item': CollapseItem,
  },
}
</script>
```

#### Attributes
<table>
    <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
        </tr>
     </thead>
    <tbody>
        <tr><td colspan="5">Collapse 接受属性</td></tr>
        <tr>
            <td>selected</td>
            <td>选中的 item 项</td>
            <td>array</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>single</td>
            <td>item 项是否单个展开</td>
            <td>boolean</td>
            <td>false / true</td>
            <td>false</td>
        </tr>
        <tr><td colspan="5">Collapse-item 接受属性</td></tr>
        <tr>
            <td>title</td>
            <td>item 项展示的标题，必须属性</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>name</td>
            <td>item 项展示的标题，必须属性</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
        </tr>
    </tbody>
</table>