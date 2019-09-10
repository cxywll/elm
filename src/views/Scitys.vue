<template>
  <div class="ht">
    <Shead>
      <template v-slot:left>
        <router-link :to="{path:'/'}">
          <i class="iconfont icon-jiantou"></i>
        </router-link>
      </template>
      <template v-slot:center>
        <router-link :to="{path:'/'}">{{city}}</router-link>
      </template>
      <template v-slot:right>
        <router-link :to="{path:'/'}">
          <a>切换城市</a>
        </router-link>
      </template>
    </Shead>
    <div class="search clearfix">
      <input
        type="text"
        class="input"
        placeholder="输入学校、商务楼、地址"
        v-model="s_content"
        @keyup.enter="search"
      />
      <button class="search_sub" @click="search">提交</button>
    </div>
    <!-- 搜索列表 -->
    <div class="searchList">
      <div class="list clearfix">
        <div @click="goTo_url(i)" v-for="(i,$index) in list" :key="$index">
          <div class="citylist" @click="place(i)">
            <p>{{i.name}}</p>
            <p class="add">{{i.address}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="history">
      <div class="h_t">搜索历史</div>
      <ul class="list">
        <div @click="goTo_url(i)" v-for="(i,index) in historycity" :key="index">
          <li class="citylist">
            <p>{{i.name}}</p>
            <p class="add">{{i.address}}</p>
          </li>
        </div>
      </ul>
      <div class="clearHistory">
        <p @click="clearHistory">清空历史</p>
      </div>
    </div>
  </div>
</template>

<script>
import Shead from "../components/Shead";
export default {
  name: "Scitys",
  components: {
    Shead
  },
    data(){
        return{
            city: this.$route.params.city,
            s_content:'',
            // 搜索列表
            list:'',
            // 搜索历史
            historycity:[]
        }
    },
    created(){
        localStorage.city = this.$route.params.city;
        if(localStorage.historycity){
            this.historycity = JSON.parse(localStorage.historycity)
        }else{
            this.historycity = []
        }
    },
    methods:{
        search(){
            this.$http.get('http://elm.cangdu.org/v1/pois?type=search&city_id='+this.$route.params.id+'&keyword='+this.s_content+'')
                .then(data=>{
                    if(this.s_content == ''){
                        alert('请输入城市')
                    }else{
                        this.list = data.data;
                    }
                })
        },
        //跳转页面
        goTo_url(id) {
          this.$router.push({ path: "/msite", query: { geohash: id.geohash } });
        },
        place(a){
            this.historycity.push(a);
            localStorage.historycity = JSON.stringify(this.historycity)
        },
        clearHistory(){
            this.historycity=[];
            localStorage.clear();
        },
        cun(a){
            localStorage.place = a;
        },
    }
};
</script>

<style scoped>
.list a p {
  color: #666;
}
.searchList span {
  float: left;
  padding: 0.1rem 0.1rem;
  margin: 0.1rem 0.1rem;
  border: 0.05rem solid #000;
  line-height: 0.4rem;
  border-radius: 0.2rem;
}
.h_c {
  background-color: #ccc;
}
.h_t {
  height: 0.8rem;
  background-color: #f7f7f7;
  font-size: 0.4rem;
  line-height: 0.8rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.clearHistory {
  width: 100%;
  height: 1.3rem;
  text-align: center;
  font-size: 0.5rem;
  background-color: #fff;
  line-height: 1.3rem;
  border-top: 1px #ccc solid;
  color: #a3a3a3;
}
a .iconfont {
  font-size: 0.5rem;
  color: #fff;
}
a {
  color: #fff;
}
.citylist {
  font-size: 0.4rem;
  height: 2rem;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  /* background-color: red; */
}
.list p {
  line-height: 1rem;
  padding: 0 0.2rem;
}
.add {
  font-size: 0.3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ht {
  width: 100%;
  height: auto;
  background-color: #eee;
  padding-top: 1.15rem;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.head {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.3rem;
  text-align: center;
  background-color: #3190e8;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
}

.head .rb {
  float: left;
  padding-left: 0.3rem;
  font-size: 0.5rem;
  line-height: 1rem;
}
.head a {
  color: #fff;
}
.head .change {
  float: right;
  padding-right: 0.1rem;
  font-size: 0.3rem;
}
.search {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  margin-top: 0.3rem;
}
.search input {
  width: 90%;
  height: 0.9rem;
  margin: 0 5%;
  margin-top: 0.2rem;
}
.search_sub {
  width: 90%;
  height: 1rem;
  margin: 0.25rem 5%;
  background-color: #3190e8;
  color: #fff;
  font-size: 0.4rem;
  line-height: 1rem;
  text-align: center;
  border: none;
  border-radius: 5px;
}
.input {
  width: 100%;
  height: 0.8rem;
  box-sizing: border-box;
  outline: none;
  padding-left: 0.2rem;
  display: block;
  border: 0.015rem solid #ccc;
  border-radius: 5px;
}
</style>