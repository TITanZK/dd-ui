---
title: Grid 网格布局
---

### Grid 网格布局
通过基础的 24 分栏，迅速简便地创建布局。

#### 基础布局
最基础的栅格布局。

<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>

#### 使用方法  
```vue
<template>
  <div>
    <d-row>
      <d-col :span="24"> <div class="grid-content bg-purple-dark"></div> </d-col>
    </d-row>
    <d-row>
      <d-col :span="12"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="12"> <div class="grid-content bg-purple-light"></div> </d-col>
    </d-row>
    <d-row>
      <d-col :span="8"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="8"> <div class="grid-content bg-purple-light"></div> </d-col>
      <d-col :span="8"> <div class="grid-content bg-purple"></div> </d-col>
    </d-row>
    <d-row>
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple-light"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple-light"></div> </d-col>
    </d-row>
    <d-row>
      <d-col :span="4"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="4"> <div class="grid-content bg-purple-light"></div> </d-col>
      <d-col :span="4"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="4"> <div class="grid-content bg-purple-light"></div> </d-col>
      <d-col :span="4"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="4"> <div class="grid-content bg-purple-light"></div> </d-col>
    </d-row>
  </div>
</template>

<script>
import { Row, Col } from 'ddui-dev'

export default {
  components: { 'd-row': Row, 'd-col': Col, },
}
</script>

<style scoped lang="scss">
.row { margin-bottom: 20px; &:last-child {margin-bottom: 0;} }
.col {border-radius: 4px;}
.bg-purple-dark {background: #d2d4d6;}
.bg-purple {background: #c2c4c5;}
.bg-purple-light {background: #aaabaf;}
.grid-content {border-radius: 4px;min-height: 36px;}
.row-bg {padding: 10px 0;background-color: #f9fafc;}
</style>
```

#### 分栏间隔
每一栏之间存在间隔。

<ClientOnly>
  <grid-gutter></grid-gutter>
</ClientOnly>

#### 使用方法
```vue
<template>
  <div>
    <d-row gutter="20">
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
    </d-row>
  </div>
</template>

<script>
import { Row, Col } from 'ddui-dev'

export default {
  components: { 'd-row': Row, 'd-col': Col, },
}
</script>

<style scoped lang="scss">
//css同第一个示例
</style>
```

#### 混合布局
使用基础的 1/24 任意组合的混合布局。

<ClientOnly>
  <grid-gs></grid-gs>
</ClientOnly>

#### 使用方法
```vue
<template>
  <div>
    <d-row :gutter="20">
      <d-col :span="16"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="8"> <div class="grid-content bg-purple"></div> </d-col>
    </d-row>
    <d-row :gutter="20">
      <d-col :span="8"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="8"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="4"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="4"> <div class="grid-content bg-purple"></div> </d-col>
    </d-row>
    <d-row :gutter="20">
      <d-col :span="4"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="16"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="4"> <div class="grid-content bg-purple"></div> </d-col>
    </d-row>
  </div>
</template>

<script>
import { Row, Col } from 'ddui-dev'

export default {
  components: { 'd-row': Row, 'd-col': Col, },
}
</script>

<style scoped lang="scss">
//css同第一个示例
</style>
```

#### 分栏偏移
设置需要偏移的栏数。

<ClientOnly>
  <grid-offset></grid-offset>
</ClientOnly>

#### 使用方法
```vue
<template>
  <div>
    <d-row :gutter="20">
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="6" :offset="6"> <div class="grid-content bg-purple"></div> </d-col>
    </d-row>
    <d-row :gutter="20">
      <d-col :span="6" :offset="6"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="6" :offset="6"> <div class="grid-content bg-purple"></div> </d-col>
    </d-row>
    <d-row :gutter="20">
      <d-col :span="12" :offset="6"> <div class="grid-content bg-purple"></div> </d-col>
    </d-row>
  </div>
</template>

<script>
import { Row, Col } from 'ddui-dev'

export default {
  components: { 'd-row': Row, 'd-col': Col, }, }
</script>

<style scoped lang="scss">
//css同第一个示例
</style>
```

#### 对齐方式
通过<code>flex属性</code>来对分栏进对齐。

<ClientOnly>
  <grid-flex></grid-flex>
</ClientOnly>

#### 使用方法
```vue
<template>
  <div>
    <d-row align="left">
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple-light"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
    </d-row>
    <d-row align="right">
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple-light"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
    </d-row>
    <d-row align="center">
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple-light"></div> </d-col>
      <d-col :span="6"> <div class="grid-content bg-purple"></div> </d-col>
    </d-row>
  </div>
</template>

<script>
import { Row, Col } from 'ddui-dev'

export default {
  components: { 'd-row': Row, 'd-col': Col, },
}
</script>

<style scoped lang="scss">
//css同第一个示例
</style>
```

#### 响应布局
借鉴 Bootstrap 的响应式设计，设置了四个响应尺寸：<code>ipad、narrowPc、pc、widePc</code>。

<ClientOnly>
  <grid-boot></grid-boot>
</ClientOnly>

#### 使用方法
```vue
<template>
  <div>
    <d-row>
      <d-col :span="12" :ipad="{span:8}" 
             :narrow-pc="{span:8}" :pc="{span:2}" :wide-pc="{span:1}">
        <div class="grid-content bg-purple"></div>
      </d-col>
      <d-col :span="4" :ipad="{span:8}" 
              :narrow-pc="{span:14}" :pc="{span:20}" :wide-pc="{span:20}">
        <div class="grid-content bg-purple-light"></div>
      </d-col>
      <d-col :span="8" :ipad="{span:8}" 
              :narrow-pc="{span:2}" :pc="{span:2}" :wide-pc="{span:1}">
        <div class="grid-content bg-purple"></div>
      </d-col>
    </d-row>
  </div>
</template>

<script>
import { Row, Col } from 'ddui-dev'

export default {
  components: { 'd-row': Row, 'd-col': Col, },
}
</script>

<style scoped lang="scss">
//css同第一个示例
</style>
```

#### Row Attributes
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
        <tr>
            <td>gutter</td>
            <td>栅格间隔</td>
            <td>number / string</td>
            <td>—</td>
            <td>0</td>
        </tr>
        <tr>
            <td>align</td>
            <td>flex 布局下的水平排列方式</td>
            <td>string</td>
            <td>left / right / center</td>
            <td>—</td>
        </tr>
    </tbody>
</table>

#### Cow Attributes
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
        <tr>
            <td>span</td>
            <td>栅格占据的列数</td>
            <td>string / number</td>
            <td>—</td>
            <td>24</td>
        </tr>
        <tr>
            <td>offset</td>
            <td>栅格左侧偏移量</td>
            <td>boolean</td>
            <td>—</td>
            <td>0</td>
        </tr>
        <tr>
            <td>ipad</td>
            <td><code> >577px</code>响应式栅格属性对象</td>
            <td>object(<code>:ipad="{span:8}"</code>)</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>narrowPc</td>
            <td><code> >769px</code>响应式栅格属性对象</td>
            <td>object(<code>:ipad="{span:8}"</code>)</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>pc</td>
            <td><code> >993px</code>响应式栅格属性对象</td>
            <td>object(<code>:ipad="{span:8}"</code>)</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>widePc</td>
            <td><code> >1201px</code>响应式栅格属性对象</td>
            <td>object(<code>:ipad="{span:8}"</code>)</td>
            <td>—</td>
            <td>—</td>
        </tr>
    </tbody>
</table>