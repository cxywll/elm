import Vue from 'vue'
import Router from 'vue-router'
import Chotcity from './views/c-hotcity.vue'
import register from './views/j-register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Chotcity',
      component: Chotcity
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
  ]
})
