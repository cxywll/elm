<template>
<div>
  <div class="S-foot">
        <div class="S-icon" v-for="(i,$index) in arr" :key="$index">
          <router-link :to="i.path" active-class="active">
            <p :class="i.icon" class="iconfont"></p>
            <p class="S-menu">{{i.name}}</p>
          </router-link>
        </div> 
  </div>
  <router-view/>
</div>
    
</template>

<script>
export default {
  name: 'Sfoot',
  data () {
    return {
      old:'',
      index:0,
        n: 0,                         
        arr:[
          {icon:'icon-changyonglogo40',name:'外卖',path:'/msite'},
          {icon:'icon-zhinanzhen',name:'搜索',path:'/csfood'},
          {icon:'icon-caidan',name:'订单',path:'/List'},
          {icon:'icon-wode',name:'我的',path:'/Mine'},
          ]
    }
  },
  methods:{
    btn(a){
      this.index = a;
    }
  }
}
</script>
<style scoped>
.active .iconfont{
    color:#3190e8;
}
.S-icon:nth-child(1) .iconfont{
  font-size: 1.2rem;
}
.S-icon:nth-child(2) .iconfont{
  font-size: 0.8rem;
}
.S-foot{
  width: 10rem;
  height: 1.5rem;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
  /* z-index: 5; */
}
.S-foot a{
  text-decoration: none;
  color: #888;
}
.S-icon{
  width: 25%;
  height: 1.8rem;
  text-align: center;
  float: left;
}
.S-icon .iconfont{
  font-size: 0.5rem;
  line-height: .9rem;
}
.S-icon .menu{
  line-height: 0.1rem;
}
</style>