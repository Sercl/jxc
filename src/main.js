import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Fastclick from 'fastclick'
// import "./assets/css/font.css"

Vue.config.productionTip = false

Fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
