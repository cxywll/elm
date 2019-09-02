import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Chotcity from './views/c-hotcity.vue'
import register from './views/j-register.vue'
=======
import Sfoot from './components/Sfoot.vue'
import Shead from './components/Shead.vue'
import Search from './components/Search.vue'
import Mine from './components/Mine.vue'
import List from './components/List.vue'
import Zmsite from './views/z-productList.vue'
import Zfood from './views/z-food.vue'

>>>>>>> 4f78e57c3b21cd21acbe2465eed7b69d3fea27f2
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Shead',
      name: 'Shead',
      component: Shead
    },
    {
      path: '/msite',
      name: 'Zmsite',
      component: Zmsite
    }, {
      path: '/List',
      name: 'List',
      component: List
    }, {
      path: '/Search',
      name: 'Search',
      component: Search
    }, {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
        path: '/',
        name: 'Sfoot',
        component: Sfoot
    },
    {
      path: '/food',
      name: 'Zfood',
      component: Zfood
    },
<<<<<<< HEAD
    {
      path: '/register',
      name: 'register',
      component: register
    },
=======
>>>>>>> 4f78e57c3b21cd21acbe2465eed7b69d3fea27f2
  ]
})
