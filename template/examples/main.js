import Vue from 'vue'
import App from './App.vue'

import HelloWorld from '../packages/HelloWorld'
Vue.use(HelloWorld)

new Vue({
  render: h => h(App),
}).$mount('#app');
