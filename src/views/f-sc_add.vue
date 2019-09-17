<template>
    <div>
        <Shead>
            <template v-slot:left><router-link :to="{name:'fadd_add'}" style="color:#fff;">&lt;</router-link></template>
            <template v-slot:center>搜索</template>        
        </Shead>
        <input type="text" placeholder="小区，写字楼/学校等" v-model="val">
        <button @click="sc_city()">搜索</button>
        <div class="box">
                <li v-for="(i,index) in sc_arr" :key="index" @click="btn(i)">
                    <router-link :to="{path:'/fadd_add',query:{city_name:i.name}}">
                        <p>{{i.name}}</p>
                        <br>
                        <span>{{i.address}}</span>
                    </router-link>
                </li>
        </div>
    </div>
</template>
<script>
import Shead from '../components/Shead'
export default {
    data(){
        return{
            val:'',
            sc_arr:[]
        }
    },
    components:{
        Shead
    },
    methods:{
        btn(i){
            localStorage.adds_n=i.name
        },
         sc_city(){
            this.$http.get('https://elm.cangdu.org/v1/pois',{
                params:{
                    city_id:localStorage.city,
                    keyword:this.val
                }
            }).then(data=>{
                // console.log(data)
                if(this.val==''){
                    alert("请输入城市")
                }else{
                    this.sc_arr=data.data
                    // console.log(this.sc_arr)
                }
            })
        }
    }
}
</script>
<style scoped>
    input{
        width: 75%;
        height: 70px;
        margin: 0.25rem 3%;
        color: #999;
        font-size: 0.4rem;
        margin-top: 130px;
        line-height: 70px;
        border: none;
        outline:none;
        border-radius: 10px;
        background:#f1f1f1 ;
    }
    button{
        width: 15%;
        height: 70px;
        color: white;
        border: none;
        outline:none;
        border-radius: 10px;
        background:#3190e8;
    }
    .box{
        height: auto;
    }
    .box li{
        width: 90%;
        height: 120px;
        margin: 20px;
        font-size:10px;
        border-bottom: 1px solid #f5f5f5;
    }
    li p{
        margin-bottom:-20px ;
        color: #555;        
        font-size: 20px;
    }
    li span{
        color: #999;
        font-size: 20px;
    }
</style>