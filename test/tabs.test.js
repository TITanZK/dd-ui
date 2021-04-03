const expect = chai.expect
import Vue from 'vue'
import Tabs from "../src/Tabs"
import TabsHead from "../src/Tabs-head"
import TabsBody from "../src/Tabs-body"
import TabsItem from "../src/Tabs-item"
import TabsPane from "../src/Tabs-pane"

Vue.component('d-tabs', Tabs)
Vue.component('d-tabs-head', TabsHead)
Vue.component('d-tabs-body', TabsBody)
Vue.component('d-tabs-item', TabsItem)
Vue.component('d-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性 ', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <d-tabs selected="tencent">
        <d-tabs-head>
          <d-tabs-item name="tencent">腾讯视频</d-tabs-item>
          <d-tabs-item name="youku">优酷视频</d-tabs-item>
          <d-tabs-item name="iqiyi">爱奇艺视频</d-tabs-item>
        </d-tabs-head>
        <d-tabs-body>
          <d-tabs-pane name="tencent">腾讯相关资讯</d-tabs-pane>
          <d-tabs-pane name="youku">优酷相关资讯</d-tabs-pane>
          <d-tabs-pane name="iqiyi">爱奇艺相关资讯</d-tabs-pane>
         </d-tabs-body>
       </d-tabs>
    `
    const vm = new Vue({
      el:div
    })
    vm.$nextTick(()=>{
      const ten = vm.$el.querySelector(`.tabs-item[data-name='tencent']`)
      expect(ten.classList.contains('active')).to.be.true
      done()
    })
  })

})