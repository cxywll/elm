import Vue from 'vue'
import Router from 'vue-router'
import Sfoot from './components/Sfoot.vue'
import Shead from './components/Shead.vue'
import Search from './components/Search.vue'
import Outer from './components/Outer.vue'
import Mine from './components/Mine.vue'
import List from './components/List.vue'
import Chotcity from './views/c-hotcity.vue'
import Zmsite from './views/z-productList.vue'
import Zfood from './views/z-food.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/food',
      name: 'Zfood',
      component: Zfood
    },
    {
      path: '/Shead',
      name: 'Shead',
      component: Shead
    },
    {
      path: '/',
      name: 'Sfoot',
      component: Sfoot,
      children: [{
        path: '/',
        name: 'Outer',
        component: Outer
      }, {
        path: '/Sfoot/List',
        name: 'List',
        component: List
      }, {
        path: '/Sfoot/Search',
        name: 'Search',
        component: Search
      }, {
        path: '/Sfoot/Mine',
        name: 'Mine',
          component: Mine
        }]
    },
    {
      path: '/',
      name: 'Chotcity',
      component: Chotcity
    },
    {
      path: '/msite',
      name: 'Zmsite',
      component: Zmsite
    }
  ]
})
