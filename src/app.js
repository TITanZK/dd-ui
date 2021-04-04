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
import Tabs from "./Tabs"
import TabsHead from './Tabs-head'
import TabsBody from './Tabs-body'
import TabsItem from './Tabs-item'
import TabsPane from './Tabs-pane'
import Popover from "./Popover"
import Collapse from "./Collapse"
import CollapseItem from './Collapse-item'

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
Vue.component('d-tabs', Tabs)
Vue.component('d-tabs-head', TabsHead)
Vue.component('d-tabs-body', TabsBody)
Vue.component('d-tabs-item', TabsItem)
Vue.component('d-tabs-pane', TabsPane)
Vue.component('d-popover',Popover)
Vue.component('d-collapse',Collapse)
Vue.component('d-collapse-item',CollapseItem)
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: '你好',
    selectedTab:'tencent'
  },
  created() {

  },
  methods: {
    yyy(){
      console.log('yyy')
    },
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