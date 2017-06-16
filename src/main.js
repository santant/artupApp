import Vue from 'vue'

//引入路由和ajax库
import VueRouter from 'vue-router'
import axios from 'axios'
//vuex 具体东西
import store from './store/'

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//import YDUI from 'vue-ydui'
import routerConfig from './router.config.js'
import App from './App.vue'

//使用use 引入插件
Vue.use(MintUI);
//Vue.use(axios);
Vue.use(VueRouter);
//Vue.use(YDUI);
Vue.prototype.$http = axios


//生成路由实例:
const router = new VueRouter(routerConfig)

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})