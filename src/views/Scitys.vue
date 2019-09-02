<template>
    <div class="ht">
        <Shead>
        <template v-slot:left>
          <router-link :to="{path:'/Sallcity'}"><i class="iconfont icon-jiantou"></i></router-link>
        </template>
        <template v-slot:center>
          <router-link :to="{path:'/Sallcity'}">{{city}}</router-link>
        </template>
        <template v-slot:right>
          <router-link :to="{path:'/Sallcity'}"><a>切换城市</a></router-link>
        </template>
      </Shead>
        <div class="search clearfix">
            <div class="search_s">
                <input type="text" class="input" placeholder="输入学校、商务楼、地址" v-model="s_content">
            </div>
            <div class="history">
                <p v-if="h_list" class="h_c clearfix"><span v-for="(i,index) in h_list" :key="index" class="rem">{{i}}</span></p>
                <p class="h_t">搜索历史</p>
            </div>
            <div class="search_sub" @click="search">
                 提交
            </div>
        </div>
        <div class="list clearfix">
            <div v-for="(i,$index) in list" :key="$index" @click="place(i.name)">
               <router-link :to="{path: '/msite',query:{address:i.name}}">
                    <p>{{i.name}}</p>
                    <p class="add">{{i.address}}</p>
               </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Shead from '../components/Shead'
export default {
    name:'Scitys',
    components: {
        Shead  
    },
    data(){
        return{
            city: this.$route.query.city,
            s_content:'',
            list:'',
            h_list:[],
        }
    },
    created(){
        localStorage.city = this.$route.query.city;
        localStorage.h_list = {arr:[]};
    },
    methods:{
        search(){
            fetch('http://elm.cangdu.org/v1/pois?type=search&city_id='+this.$route.id+'&keyword='+this.s_content+'')
                .then(response=>response.json())
                .then(response=>{
                    this.list = response;
                })
        },
        place(a){
            localStorage.place = a;
        }
    }
}
</script>

<style scoped>
.list a p{
    color: #666;
}
.history span{
    float: left;
    padding: .1rem .1rem;
    margin: .1rem .1rem;
    border: .05rem solid #000;
    line-height: .4rem;
    border-radius: .2rem;
}
.history .h_c{
    background-color: #ccc;
}
.history .h_t{
    text-align: center;
    height: .8rem;
    background-color: #f7f7f7;
    font-size: .4rem;
    line-height: .8rem;
}
a .iconfont{
    font-size: .5rem;
    color: #fff;
}
a{
    color: #fff;
}
.list div{
    font-size: 0.4rem;
    height: 2rem;
    border-bottom: 1px solid #ccc;
}
.list p{
    line-height: 1rem;
    padding: 0 0.2rem;
}
.add{
    font-size: 0.3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
    .ht{
        width: 100%;
        height: auto;
        background-color: #f7f7f7;
        padding-top: 1.15rem;
    }
    .clearfix:before,.clearfix:after{
        content: '';
        display: table;
    }
    .clearfix:after{
        clear: both;
    }
    .head{
        width:100%;
        height:1rem;
        line-height: 1rem;
        font-size: 0.3rem;
        text-align: center;
        background-color: #3190e8;
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
    }
    
    .head .rb{
        float: left;
        padding-left: 0.3rem;
        font-size: 0.5rem;
        line-height: 1rem;
    }
    .head a{
        color: #fff;
    }
    .head .change{
        float: right;
        padding-right: 0.1rem;
        font-size: 0.3rem;
    }
    .search{
        width: 100%;
        height: auto;
        background-color: #fff;
        border-top: 0.015rem solid #f7f7f7;
    }
    .search_s{
        width: 80%;
        height: 1.3rem;
        padding: 0.4rem 10% 0.1rem;
    }
    .search_sub{
        width: 80%;
        height: 1rem;
        margin: 0.25rem 10%;
        background-color: #3190e8;
        color: #fff;
        font-size: 0.4rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 5px;
    }
    .input{
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