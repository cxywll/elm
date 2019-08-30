<template>
<div>
  <div class="S-foot">
        <div class="S-icon" @click="btn($index)" v-for="(i,$index) in arr" :key="$index">
          <router-link :to="i.path">
            <p :class="i.icon" class="iconfont" :style="{color: index == $index?'#3190e8':'#888'}"></p>
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
          {icon:'icon-changyonglogo40',name:'外卖',path:'/'},
          {icon:'icon-zhinanzhen',name:'搜索',path:'/Sfoot/Search'},
          {icon:'icon-dingdan',name:'订单',path:'/Sfoot/List'},
          {icon:'icon-wode',name:'我的',path:'/Sfoot/Mine'},
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
.S-icon:nth-child(1) .iconfont{
  font-size: 1.3rem;
}
.S-icon:nth-child(2) .iconfont{
  font-size: 0.9rem;
}
.S-foot{
  width: 100%;
  height: 1.5rem;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
}
.S-foot a{
  text-decoration: none;
  color: #888;
}
.S-icon{
  width: 25%;
  height: 100px;
  text-align: center;
  float: left;
}
.S-icon .iconfont{
  font-size: 0.6rem;
  line-height: 1rem;
}
.S-icon .menu{
  line-height: 0.1rem;
}
</style>