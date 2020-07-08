import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.css'
import './style/transition.css'

Vue.config.productionTip = false

Vue.use(elementUI)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
