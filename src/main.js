import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes/index'
import store from './store/index' // Import store Vuex
import 'bootstrap/dist/css/bootstrap.css'; // Import file CSS Bootstrap
import 'bootstrap'; // Import JavaScript Bootstrap

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
