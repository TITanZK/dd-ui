---
title: Grid 网格布局
---

### Grid 网格布局
通过基础的 24 分栏，迅速简便地创建布局。

#### 基础布局
最基础的栅格布局。
<br>

<grid-demo></grid-demo>

#### 使用方法  
未完成

#### 分栏间隔
每一栏之间存在间隔。
<br>

<grid-gutter></grid-gutter>

#### 使用方法
未完成

#### 混合布局
使用基础的 1/24 任意组合的混合布局。
<br>

<grid-gs></grid-gs>

#### 使用方法
未完成

#### 分栏偏移
设置需要偏移的栏数。
<br>

<grid-offset></grid-offset>

#### 使用方法
未完成

#### 对齐方式
通过<code>flex属性</code>来对分栏进对齐。
<br>

<grid-flex></grid-flex>

#### 使用方法
未完成

#### 响应布局
借鉴 Bootstrap 的响应式设计，设置了四个响应尺寸：<code>ipad、narrowPc、pc、widePc</code>。
<br>

<grid-boot></grid-boot>

#### 使用方法
未完成

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