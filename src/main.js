import Vue from 'vue'
import App from './App.vue'
import './utils/globalLibraries'
import router from "./router/router";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
