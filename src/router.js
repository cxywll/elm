import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Sfoot from './components/Sfoot.vue'
import Shead from './components/Shead.vue'
import Search from './components/Search.vue'
import Outer from './components/Outer.vue'
import Mine from './components/Mine.vue'
import List from './components/List.vue'
=======
import Chotcity from './views/c-hotcity.vue'
import Zmsite from './views/z-productList.vue'
>>>>>>> 79abbb3f90c457712d17b6c06a338665ae30d064

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
<<<<<<< HEAD
      path:'/Shead',
      name: 'Shead',
      component: Shead
    },
    {
      path: '/',
      name: 'Sfoot',
      component: Sfoot,
      children:[{
        path:'/',
        name:'Outer',
        component: Outer
      },{
        path:'/Sfoot/List',
        name:'List',
        component: List
      },{
        path:'/Sfoot/Search',
        name:'Search',
        component: Search
      },{
        path:'/Sfoot/Mine',
        name:'Mine',
        component: Mine
      }]
    },
=======
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
>>>>>>> 79abbb3f90c457712d17b6c06a338665ae30d064
  ]
})
