import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import hotcity from './views/f-hotcity.vue'
import fsearch from './views/f-search.vue'
import Hello from './components/HelloWorld.vue'
=======
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
>>>>>>> a5fce193b1c12b1fd8a885e52cf77220538907d2

>>>>>>> 4f78e57c3b21cd21acbe2465eed7b69d3fea27f2
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      name: 'hotcity',
      component: hotcity
    },
    {
      path: '/f-search/:id',
      name: 'search',
      component: fsearch,
      props: route=>({
        name:route.query
      })
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
=======
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
        path: '/Sfoot',
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
>>>>>>> a5fce193b1c12b1fd8a885e52cf77220538907d2
  ]
})
