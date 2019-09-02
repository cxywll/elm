import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import hotcity from './views/f-hotcity.vue'
import fsearch from './views/f-search.vue'
import Hello from './components/HelloWorld.vue'
=======
<<<<<<< HEAD
>>>>>>> ea40245952b8a8fa8424bf575373613ff5410651
import Chotcity from './views/c-hotcity.vue'
import register from './views/j-register.vue'
import Sfoot from './components/Sfoot.vue'
import Shead from './components/Shead.vue'
import Search from './components/Search.vue'
import Mine from './components/Mine.vue'
import List from './components/List.vue'
import Zmsite from './views/z-productList.vue'
import Zfood from './views/z-food.vue'
>>>>>>> a5fce193b1c12b1fd8a885e52cf77220538907d2

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
      // 赵永超:美食主页
      path: '/msite',
      name: 'Zmsite',
      component: Zmsite
    },
    {
      // 订单
      path: '/List',
      name: 'List',
      component: List
    },
    {
      // 搜索美食
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      // 我的
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
      // 滑动店铺点击
      path: '/food',
      name: 'Zfood',
      component: Zfood
    },
    {
      // 密码登录
      path: '/register',
      name: 'register',
      component: register
    },
<<<<<<< HEAD
=======
=======
>>>>>>> 4f78e57c3b21cd21acbe2465eed7b69d3fea27f2
>>>>>>> a5fce193b1c12b1fd8a885e52cf77220538907d2
>>>>>>> ea40245952b8a8fa8424bf575373613ff5410651
  ]
})
