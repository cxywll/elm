import Vue from 'vue'
import Router from 'vue-router'
import hotcity from './views/f-hotcity.vue'
import fsearch from './views/f-search.vue'
import Hello from './components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
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
  ]
})
