import Vue from 'vue'
import Router from 'vue-router'
import Chotcity from './views/c-hotcity.vue'
import Zmsite from './views/z-productList.vue'

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
      path: '/msite',
      name: 'Zmsite',
      component: Zmsite
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
