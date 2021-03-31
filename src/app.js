import Vue from 'vue'
import Button from "./Button"
import Icon from "./Icon"
import ButtonGroup from './Button-group'
import Input from "./Input"
import Row from "./Row"
import Col from "./Col"
import Layout from "./Layout"
import Sider from "./Sider"
import Footer from "./Footer"
import Content from "./Content"
import Header from "./Header"
import Toast from "./Toast"
import plugin from "./plugin"

Vue.component('d-button', Button)
Vue.component('d-icon', Icon)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-input', Input)
Vue.component('d-row', Row)
Vue.component('d-col', Col)
Vue.component('d-layout', Layout)
Vue.component('d-sider', Sider)
Vue.component('d-footer', Footer)
Vue.component('d-content', Content)
Vue.component('d-header', Header)
Vue.component('d-toast', Toast)
Vue.use(plugin)
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: '你好'
  },
  created() {

  },
  methods: {
    showToast() {
      this.$toast('添加成功', {
        position:'top',
        enableHtml: true,
        closeButton: {text:'大傻瓜',callback(){console.log('智商下线')}},
        autoClose: 2,
      })
    }
  }
})