import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
//import Chotcity from './views/c-hotcity.vue'
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Chotcity from './views/c-hotcity.vue'
>>>>>>> e0063484039430806a67ef5e71dc6c79b37db84b
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9

import register from './views/j-register.vue'
import reset from './views/j-reset.vue'
import zhifu from './views/j-zhifu.vue'

// import Yorder from './views/y-order.vue'

import Yorder from './views/y-order.vue'
//import register from './views/j-register.vue'
// 公共组件

<<<<<<< HEAD

//import Yorder from './views/y-order.vue'
//import register from './views/j-register.vue'
//import reset from './views/j-reset.vue'
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 3f828816b7c2f6fea7c102323af37929edfa6ef7

import Yorder from './views/y-order.vue'
import register from './views/j-register.vue'
import zhifu from './views/j-zhifu.vue'
import reset from './views/j-reset.vue'
>>>>>>> e0063484039430806a67ef5e71dc6c79b37db84b
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9
// import Yorder from './views/y-order.vue'
import Sfoot from './components/Sfoot.vue'
import Shead from './components/Shead.vue'
import Mine from './components/Mine.vue'
import List from './components/List.vue'
import Sallcity from './views/Sallcity.vue'
import Scitys from './views/Scitys.vue'
import Sload from './components/Sload.vue'
// 我的积分
import point from './components/points.vue'
// 会员中心
import Svip from './components/Svip.vue'
// 我的里的服务中心
import Sfuwu from './components/Sfuwu.vue'
import Sintro from './components/Sintro.vue'
// 美食主页
import Zmsite from './views/z-productList.vue'
<<<<<<< HEAD
import Zfood from './views/z-food.vue'
=======
<<<<<<< HEAD
import Zfood from './views/z-food.vue'                                                                                      
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9

// 搜索美食
import Csfood from './views/C-searchfood.vue'


<<<<<<< HEAD

// 搜索美食
//import Csfood from './views/C-searchfood.vue'
=======
=======
import Zfood from './views/z-food.vue'
// 搜索美食
import Csfood from './views/C-searchfood.vue'
<<<<<<< HEAD
>>>>>>> e0063484039430806a67ef5e71dc6c79b37db84b
// 地址
import fadd from './views/f-address1.vue'
import '../icon/iconfont.css'
import fadd_add from './views/f-add_address.vue'
import fscadd from './views/f-sc_add.vue'
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9
// 支付
import Cpay from './views/C-pay.vue'
// 余额
import Cyue from './components/Cyue.vue'
<<<<<<< HEAD
// 优惠券
import Squan from './views/S-quan.vue'
import Shong from './views/S-hongbao.vue'
import Sshopper from './views/S-shopper.vue'
=======
// 订单详情
import listxq from './views/C-listxq.vue'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
>>>>>>> 9c55eea7e2a03d3509fd1aa6ce542d0bc0b112c4
>>>>>>> 91f3fa27b34d537048e2819626e40064f1a701bb
>>>>>>> 3f828816b7c2f6fea7c102323af37929edfa6ef7
>>>>>>> e0063484039430806a67ef5e71dc6c79b37db84b
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9
Vue.use(Router)

Vue.use(Router)
export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
<<<<<<< HEAD

=======
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9
      // 默认首页
      path: '/',
      name: 'Sallcity',
      component: Sallcity
    },
    {

      // 附近商家点击
<<<<<<< HEAD

=======
=======
>>>>>>> e0063484039430806a67ef5e71dc6c79b37db84b
      // 附近商家点击
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9
      path: '/yorder',
      name: 'Yorder',
      component: Yorder
    },
    {
<<<<<<< HEAD


      // 公共头部


=======
      // 公共头部
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9
      path: '/Shead',
      name: 'Shead',
      component: Shead
    },
    {
      // 搜索城市
      path: '/Scitys',
      name: 'Scitys',
      component: Scitys,
    },
    {
      // 赵永超:美食主页
      path: '/msite',
      name: 'msite',
      component: Zmsite,
    },
    {
      // 滑动店铺点击
      path: '/food',
      name: 'Zfood',
      component: Zfood
    },
    {
      // 附近商家点击
      path: '/yorder',
      name: 'Yorder',
      component: Yorder
    },
    {
      // 搜索美食
      path: '/csfood',
      name: 'Csfood',
      component: Csfood
    },
    {
      // 会员中心
      path: '/Svip',
      name: 'Svip',
      component: Svip
    },
    {
      // 订单
      path: '/List',
      name: 'List',
      component: List
    },
    // 订单详情
    {
      path:'/listxq',
      name:'listxq',
      component:listxq
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
      // 密码登录
      path: '/register',
      name: 'register',
      component: register
<<<<<<< HEAD
=======
<<<<<<< HEAD
    },{
=======
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9
    },
    
    {
<<<<<<< HEAD
      path: '/Search',
      name: 'Search',
      component: Search
=======
>>>>>>> e0063484039430806a67ef5e71dc6c79b37db84b
      path: '/reset',
      name: 'reset',
      component: reset
    },

		{
      path: '/zhifu',
      name: 'zhifu',
      component: zhifu
    },
    
    
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> e0063484039430806a67ef5e71dc6c79b37db84b
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9
    // 下载饿了么APP
    {
      path: '/Sload',
      name: 'Sload',
      component: Sload
    },
    {
      path:'/fadd',
      name:'fadd',
      component:fadd,
    },
    {
      path:'/fadd_add',
      name:'fadd_add',
      component:fadd_add,
    },
    {
      path:'/fscadd',
      name:'fscadd',
      component:fscadd,
    },
    // 服务中心
    {
    path: '/Sfuwu',
    name: 'Sfuwu',
    component: Sfuwu
  },
  // 热门问题具体讲解
  {
    path: '/Sintro',
    name: 'Sintro',
    component: Sintro
  },
  // 积分页
  {
    path: '/point',
    name: 'point',
    component: point
  },
  // 余额
  {
    path:'/cyue',
    name:'cyue',
    component:Cyue
  },
  // 支付
  {
    path:'/cpay',
    name:'Cpay',
    component:Cpay
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  // 优惠券
  {
    path:'/Squan',
    name:'Squan',
    component:Squan,
    children:[
      // 红包
      {
        path:'/Squan/Shong',
        name:'Shong',
        component:Shong
      },
      {
        path:'/Squan/Sshopper',
        name:'Sshopper',
        component:Sshopper
      }
    ]
  },
=======
>>>>>>> 54dc2cbcade8900abe96309dc36d3138e7e77f63
>>>>>>> 9c55eea7e2a03d3509fd1aa6ce542d0bc0b112c4
>>>>>>> 91f3fa27b34d537048e2819626e40064f1a701bb
>>>>>>> 3f828816b7c2f6fea7c102323af37929edfa6ef7
>>>>>>> e0063484039430806a67ef5e71dc6c79b37db84b
>>>>>>> a3348c49e19784472bd80c2dcaee5909a7cb66d9
  ]
})
