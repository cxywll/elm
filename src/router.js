import Vue from 'vue'
import Router from 'vue-router'
import Chotcity from './views/c-hotcity.vue'
import Yorder from './views/y-order.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Chotcity',
      component: Chotcity
    },
    {
      path: '/yorder',
      name: 'Yorder',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Yorder
    }
  ]
})
