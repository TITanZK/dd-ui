const expect = chai.expect
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input组件', () => {

  it('存在.', () => {
    expect(Input).to.be.ok
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('接受 value', () => {
      vm = new Constructor({
        propsData: {
          value: 'aaa'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('aaa')
    })

    it('接受 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('接受 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('接受 error', () => {
      vm = new Constructor({
        propsData: {
          error: 'fuck'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMassage = vm.$el.querySelector('.error-message')
      expect(errorMassage.innerText).to.equal('fuck')
    })
  })

  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('支持change/input/focus/blur 事件', () => {
      const eventArray = ['change', 'input', 'focus', 'blur']
      eventArray.forEach(eventName => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        // 触发
        let event = new Event(eventName)
        Object.defineProperty(event, 'target',
          {
            value: {value: '11'},
            enumerable: true
          })
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('11')
      })
    })
  })
})