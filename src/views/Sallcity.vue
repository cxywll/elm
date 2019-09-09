<template>
    <div id="Sbigbox">
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
        <router-link :to="{name:'Scitys',params:{city:mcity,id: id}}">
            <p class="mc" >
              {{mcity}}<span><a style="color: #3190e8"><i class="iconfont icon-jiantouyou"></i></a></span>
            </p>
        </router-link>
      </div>
      <div class="hotcity">
        <p>热门城市</p>
          <span v-for="(i,$index) in hotlist" :key="$index" @click="id = i.id">
            <router-link :to="{name:'Scitys',params:{city:i.name,id: i.id}}" >
              {{i.name}}
            </router-link>
          </span>
      </div>
      <div class="allcity">
          <div v-for="(i,$key,$index) in newObj" :key="$index" class="city">
            <p class="letterp">{{$key}} <i>（按字母排序）</i></p>
            <span v-for="(j,$ind) in i" :key="$ind" @click="id = i.id">
              <router-link :to="{name:'Scitys',params:{city:j.name,id: j.id}}">
                {{j.name}}
              </router-link>
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
      mcity: '',
      hotlist:'',
      alllist:'',
      newObj:{},
      id:''
    }
  },
  created(){
    this.$http.get('https://elm.cangdu.org/v1/cities?type=guess')
      .then(data=>{
        this.mcity = data.data.name;
        this.id = data.data.id;
      })
    this.$http.get('http://elm.cangdu.org/v1/cities?type=hot')
      .then(data=>{
        this.hotlist = data.data;
      })
    this.$http.get('http://elm.cangdu.org/v1/cities?type=group')
      .then(data=>{
        this.alllist = data.data;
        var newkey = Object.keys(this.alllist).sort();
        var newObj = {};
        for (var i = 0; i < newkey.length; i++) {
           newObj[newkey[i]] = this.alllist[newkey[i]];
        }
        this.newObj = newObj;
        
      })
  },
  methods:{
    
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Sbigbox{
  background-color: #eee;
}
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
  background-color: #fff;
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
  background-color: #fff;
  margin-bottom: 0.2rem;
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
  min-height: 1.65rem;
  font-size: 0.1rem;
  border-bottom: 1px solid #a3a3a3;
  background-color: #fff;
}
.city{
  background-color: #fff;
  margin-top: 0.2rem;
}
.hotcity p{
  width: 100%;
  height: 60px;
  font-size: 0.35rem;
  line-height: 60px;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.hotcity span{
  cursor: pointer;
  display: inline-block;
  width: 25%;
  height: 0.95rem;
  line-height: 0.95rem;
  text-align: center;
  border-top: 2px solid rgb(179, 177, 177);
  border-left: 2px solid rgb(179, 177, 177);
  box-sizing: border-box;
}
.hotcity a{
  color: #3190e8;
  font-size: 0.4rem;
}
.allcity a{
  color: #666;
  font-size: 0.4rem;
}
.allcity{
  width:100%;
  min-height: 1.65rem;
  font-size: 0.1rem;
  background-color: #eee;
}
.allcity p{
  width: 98%;
  line-height: 0.8rem;
  background-color: #fff;
  font-size: 0.35rem;
  padding-left: 0.3rem;
  box-sizing: border-box;
  border-bottom:1px #ccc solid;
}
.allcity p>i{
  color: #a3a3a3;
  font-size: 0.3rem;
  font-style: initial;
}
.allcity span{
  cursor: pointer;
  display: inline-block;
  width: 25%;
  height: 0.95rem;
  line-height: 0.95rem;
  text-align: center;
  font-size: 0.15rem;
  border-right: 2px solid rgb(179, 177, 177);
  border-bottom: 2px solid rgb(179, 177, 177);
  padding: 0 0.1rem;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>