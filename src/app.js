import Vue from 'vue'
import Button from "./Button"
import Icon from "./Icon"
import ButtonGroup from './Button-group'
import Input from "./Input"
import Row from "./Row"
import Col from "./Col"

Vue.component('d-button',Button)
Vue.component('d-icon',Icon)
Vue.component('d-button-group',ButtonGroup)
Vue.component('d-input',Input)
Vue.component('d-row',Row)
Vue.component('d-col',Col)

new Vue({
  el: '#app',
  data:{
    loading1: false,
    loading2: true,
    loading3: false,
    message:'你好'
  }
})