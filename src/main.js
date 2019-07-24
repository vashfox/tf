import "@/assets/styles/main.css";

import App from './App.vue'
import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
