import Vue from 'vue'
import Button from "./Button"
import Icon from "./Icon"
import ButtonGroup from './Button-group'
import Input from "./Input"

Vue.component('d-button',Button)
Vue.component('d-icon',Icon)
Vue.component('d-button-group',ButtonGroup)
Vue.component('d-input',Input)

new Vue({
  el: '#app',
  data:{
    loading1: false,
    loading2: true,
    loading3: false,
  }
})