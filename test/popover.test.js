const expect = chai.expect
import Vue from 'vue'
import Popover from "../src/Popover"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

  it('存在.', () => {
    expect(Popover).to.exist
  })

  it('可以设置 position 属性', (done) => {
    Vue.component('d-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <d-popover position="bottom" ref="test">
      <template slot="content">内容</template>
      <button>点我</button>
    </d-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const {contentWrapper} = vm.$refs.test.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  })

  it('可以设置 trigger 属性', (done) => {
    Vue.component('d-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <d-popover trigger="hover" ref="test">
      <template slot="content">内容</template>
      <button>点我</button>
    </d-popover>
    `
    const vm = new Vue({
      el: div
    })
    const event = new Event('mouseenter')
    vm.$refs.test.$el.dispatchEvent(event)
    vm.$nextTick(() => {
      const {contentWrapper} = vm.$refs.test.$refs
      expect(contentWrapper).to.exist
      done()
    })
  })
})