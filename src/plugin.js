import Toast from "./Toast"

export default {
  install(Vue, options) {

    Vue.prototype.$toast = function (message, toastOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({propsData: toastOptions})
      toast.$slots.default = [message]//顺序
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
