import Vue from 'vue';
import App from './App.vue';
import { MdButton, MdIcon } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdButton)
Vue.use(MdIcon)

var app = new Vue({
  el: '#app',
  render: h => h(App)
})
