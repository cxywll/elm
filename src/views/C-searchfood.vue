<template>
    <div id="c-bigbox">
        <shead>
            <template v-slot:left><router-link to="/msite" style="color:#fff;"><i class="iconfont icon-jiantou"></i></router-link></template>
            <template v-slot:center>搜索</template>
        </shead>
        <div class="inputbox">
            <input type="search" placeholder="请输入商家或美食名称" v-model="keyword">
            <button @click="searchfood(keyword)">提交</button>
        </div>
        <!-- 搜索列表 -->
        <i class="null" v-show="tipsshow">{{this.tips}}</i>
        <ul class="foodList" v-show="show">
            <!-- :to="{name:'Yorder',params:{img:i.image_path,name:i.name,money:i.piecewise_agent_fee.tips,promotion:i.promotion_info,fz:i.order_lead_time}}" -->
            <router-link v-for="(item,index) in cslist" :key="index+'cslist'" :to="{name:'Yorder',params:{img:item.image_path,name:item.name,money:item.piecewise_agent_fee.tips,promotion:item.promotion_info,fz:item.order_lead_time}}">
                <li>
                    <div class="imgb">
                        <img :src="'//elm.cangdu.org/img/'+item.image_path" alt="">
                    </div>
                    <div class="xqbox">
                        <p>{{item.name}}</p>
                        <span>月售{{item.recent_order_num}}单</span> <br>
                        <i>{{item.float_minimum_order_amount}}元起送 / 距离{{item.distance}}</i>
                    </div>
                </li>
            </router-link>
        </ul>
        <!-- 搜索历史 -->
        <div class="searchHistoy">
            <p class="sh">搜索历史</p>
            <ul class="histoyList">
                <li v-for="(item,index) in historyword" :key="index" @click="searchfood(item)">
                    <p>{{item}}</p>
                </li>
            </ul>
            <p class="c-clear" @click="clearHistory">清空搜索历史</p>
        </div>
        <sfoot></sfoot>
    </div>
</template>

<script>
import shead from "../components/Shead";
import sfoot from "../components/Sfoot";
export default {
    data(){
        return{
            keyword:'',
            // 提示
            tips:'',
            // 搜索列表
            cslist:[],
            // 出现无数据提示
            tipsshow:false,
            // 出现列表
            show:false,
            // 历史纪录
            historyword:[]
        }
    },
    components: {
        shead,
        sfoot
    },
    created(){
        if(localStorage.historyword){
            this.historyword = JSON.parse(localStorage.historyword)
        }else{
            this.historyword = []
        }
    },
    methods:{
        // 搜索列表
        searchfood(item){
            this.axios.get('https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword='+item).then((res)=>{
                console.log(res)
                if(res.data.status == 0){
                    this.tipsshow = true;
                    this.tips = '很抱歉！无搜索结果';
                    this.historyShow = false
                    if(this.keyword == ''){
                        this.tips = ''
                        this.tipsshow = false;
                        this.show = false;
                    }
                }else{
                    this.tipsshow = false;
                    this.show = true;
                    this.cslist = res.data;
                }
            })
            this.historyList()
        },
        // 历史纪录
        historyList(){
            if(this.keyword!=''){
                this.historyword.unshift(this.keyword)
                console.log(this.historyword);
                localStorage.historyword = JSON.stringify(this.historyword)
            }
        },
        // 清空历史
        clearHistory(){
            this.historyword =[]
            localStorage.clear()
        }
    }
}
</script>

<style scoped>
*{margin: 0;padding: 0;list-style: none;}
a .iconfont{
    font-size: .5rem;
}
#c-bigbox{
    width: 100%;
    height: 2rem;
    background-color:#efefef;
}
.inputbox{
    width: 100%;
    height: 100px;
    background-color: #fff;
    margin-top: 1.2rem;
    padding: 2.3% 2%;
    box-sizing: border-box;
}
.inputbox input{
    width: 75%;
    height: 100%;
    background-color:#efefef;
    border: none;
    border-radius: 5px;
    padding-left: 2%;
    box-sizing: border-box;
    font-size: 30px;
    font-weight: bold;
    outline: none;
}
.inputbox button{
    width: 20%;
    height: 100%;
    background-color: #2b92f1;
    border: none;
    margin-left: 3%;
    border-radius: 5px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
}
.null{
    width: 100%;
    height: 70px;
    text-align: center;
    font-size: 0.4rem;
    background-color: #fff;
    display: block;
    font-style: initial;
    line-height: 70px;
    margin-top: 0.05rem;
}
.foodList{
    width: 100%;
    margin-top: 0.1rem;
}
.foodList li{
    width: 100%;
    height: 2rem;
    background-color: #fff;
    border-bottom: 1px #ccc solid;
    padding: 2% 2%;
    box-sizing: border-box;
}
.imgb{
    width: 20%;
    height: 100px;
    float: left;
}
.imgb img{
    width: 100%;
    height: 100%;
}
.xqbox{
    width: 77%;
    float: left; 
    margin-left: 3%;
}
.xqbox p{
    font-size: 0.35rem;
    margin-bottom: 0.15rem;
}
.histoyList li p{
    font-size: 0.5rem;
    margin-bottom: 0.3rem;
}
.histoyList li p{
    font-size: 0.45rem;
    height: 100%;
    display:block;
    line-height: 1rem;
}
.xqbox span{
    margin-top: 0.15rem;
}
.xqbox span,.xqbox i{
    font-size: 0.35rem;
    color: #a3a3a3;
}
.xqbox i{
    font-style: normal;
}
.searchHistoy{
    width: 100%;
    min-height: 2rem;
    margin-bottom: 1.6rem;
}
.sh,.c-clear{
    width: 100%;
    height: 80px;
    background-color: #efefef;
    font-size: 0.4rem;
    font-weight: bold;
    line-height: 80px;
    padding: 0 20px;
    box-sizing: border-box;
}
.sh{color: #696969;}
.c-clear{
    text-align: center;
    color: #2b92f1;
    font-size: 0.5rem;
    background-color: #fff;
}
.histoyList{
    width: 100%;
}
.histoyList li{
    width: 100%;
    height: 1.3rem;
    padding: 2% 2%;
    box-sizing: border-box;
    line-height: 1.3rem;
    border-bottom:1px #ccc solid; 
}
</style>