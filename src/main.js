import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Fastclick from 'fastclick'
import "./assets/css/index.styl"
import ApiPlugin from './plugin/api'
import wu from './plugin/wu/wu-ui/wu-ui'
import './plugin/wu/wu-ui/wu-ui.css';
import 'swiper/dist/css/swiper.css'

Vue.use(ApiPlugin)
Vue.config.productionTip = false
Vue.prototype.$wu = wu

Fastclick.attach(document.body)

router.beforeEach((to, from, next) =>{
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
