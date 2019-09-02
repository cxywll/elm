<template>
    <div>
      <Shead>
        <template v-slot:left>
          <router-link to="/Mine"><span>elem</span></router-link>
        </template>
        <template v-slot:right>
          <router-link to="/register"><span>登录</span><span>|</span><span>注册</span></router-link>
        </template>
      </Shead>
      <div class="monment">
        <p class="pt">
          当前定位的城市：<span>定位不准时，请在城市列表中选择</span>
        </p>
        <router-link :to="{path:'/Scitys',query:{city:mcity}}">
            <p class="mc" >
              {{mcity}}<span><a style="color: #3190e8"><i class="iconfont icon-jiantouyou"></i></a></span>
            </p>
        </router-link>
      </div>
      <div class="hotcity">
          <span v-for="(i,$index) in hotlist" :key="$index" @click="change(i.name,i.id)"><router-link :to="{path:'/Scitys',query:{city:i.name}}" >{{i.name}}</router-link></span>
      </div>
      <div class="allcity">
          <div v-for="(i,$key,$index) in newObj" :key="$index" class="city">
            <p>{{$key}}</p>
            <span v-for="(j,$ind) in i" :key="$ind" @click="change(j.name,j.id)">
              <router-link :to="{path:'/Scitys',query:{city:j.name,id: i.id}}">{{j.name}}</router-link>
            </span>
          </div>
      </div>
  </div>
</template>
<script>
import Shead from '../components/Shead.vue'
export default {
  name:'Sallcity',
  components: {
      Shead
  },
  data(){
    return{
      mcity: '北京',
      hotlist:'',
      alllist:'',
      newObj:{},
    }
  },
  created(){
    fetch('http://elm.cangdu.org/v1/cities?type=hot')
      .then(response=>response.json())
      .then(response=>{
        this.hotlist = response;
      })
    fetch('http://elm.cangdu.org/v1/cities?type=group')
      .then(response=>response.json())
      .then(response=>{
        this.alllist = response;
        var newkey = Object.keys(this.alllist).sort();
        var newObj = {};
        for (var i = 0; i < newkey.length; i++) {
           newObj[newkey[i]] = this.alllist[newkey[i]];
        }
        this.newObj = newObj;
        
      })
  },
  methods:{
    change(a,b){
      this.mcity = a;
      localStorage.id = b;
    }
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a span{
  font-size: .5rem;
  color: #fff;
}
.head{
  width: 100%;
  height: 0.8rem;
  background-color: #3190e8;
  font-size: 0.25rem;
  color: #fff;
  line-height: 0.8rem;
}
.title{
  padding-left: 0.1rem;
  user-select: none;
}
.login{
  float:right;
  padding-right:0.1rem;
  user-select: none;
}
.login a{
  cursor: pointer;  
  padding: 0 0.1rem;
}
.monment{
  width: 100%;
  height: 2rem;
  font-size: 0.2rem;
  margin-top: 1.4rem;
  border-bottom: 2px solid #ccc;
}
.pt{
  padding-left: 0.1rem;
  line-height: 1rem;
  border-bottom: 1px solid #ccc;
  font-size: 0.35rem;
}
.pt span{
  float:right;
  padding-right: 0.1rem;
  color: #ccc;
}
.monment .mc{
  padding-left: 0.3rem;
  line-height: 0.9rem;
  font-size: 0.4rem;
  color: #3190e8;
}
.mc span{
  float: right;
  padding-right: 0.5rem;
  color: #666;
}

.hotcity{
  height: 1.65rem;
  font-size: 0.1rem;
  border-bottom: 1px solid #000;
}
.hotcity span{
  cursor: pointer;
  display: inline-block;
  width: 25%;
  height: 0.75rem;
  line-height: 0.75rem;
  text-align: center;
  font-size: 0.2rem;
  border: 2px solid rgb(179, 177, 177);
  box-sizing: border-box;
  border-radius: 6px;
}
.hotcity a{
  color: #3190e8;
  font-size: .3rem;
}
.allcity a{
  color: #666;
  font-size: .3rem;
}
.allcity{
  width:100%;
  height: 1.65rem;
  font-size: 0.1rem;
}
.allcity div{
  border-bottom: 1px solid #000;
}
.allcity p{
  line-height: 0.5rem;
}
.allcity span{
  cursor: pointer;
  display: inline-block;
  width: 25%;
  height: 0.75rem;
  line-height: 0.75rem;
  text-align: center;
  font-size: 0.15rem;
  border: 2px solid rgb(179, 177, 177);
  box-sizing: border-box;
  border-radius: .1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>