<template>
    <div>
        <Shead>
			<template v-slot:left>
				<router-link to="/Mine"><i class="iconfont icon-jiantou"></i></router-link>
			</template>
			<template v-slot:center>服务中心</template>
        </Shead>
        <div class="kefu">
            <div class="serves">
                <p><i class="iconfont icon-kefuxiaojiejie-"></i></p>
                <p>在线客服</p>
            </div>
            <div class="serves">
                <p><i class="iconfont icon-kefu"></i></p>
                <p>在线客服</p>
            </div>
        </div>
        <div class="question">
            <p class="hq">热门问题</p>
            <div class="hot_question" v-for="(i,index) in title" :key="index">
                <router-link :to="{name:'Sintro',params:{t_name:i,t_content:content[index]}}">
                    <p>
                        {{i}}<span><i class="iconfont icon-jiantouyou"></i></span>
                    </p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Shead from './Shead.vue'
export default {
    data(){
        return{
            title:[],
            content:[]
        }
    },
    components: {   
        Shead
    },
    created () {
        this.$http.get('https://elm.cangdu.org/v3/profile/explain')
        .then(data=>{
            for(var i in data.data){
                if(i.charAt(i.length - 1) == 'n'){
                    this.title.push(data.data[i])
                }
                if(i.charAt(i.length - 1) == 't'){
                    this.content.push(data.data[i])
                }
            }
        })
    }
}
</script>
<style scoped>
.hot_question{
    padding-left: .3rem;
    line-height: 1.2rem;
    border-bottom: .0025rem solid #e4e3e3;
}
.hot_question a{
    color: #000;
    font-size: .36rem;
}
.hot_question a .iconfont{
    font-size: .3rem;
    float: right;
    margin-right: .4rem;
    color: #a09f9f;
}
.question .hq{
    line-height: 2rem;
    font-size: .5rem;
    padding-left: .3rem;
    border-bottom: .0025rem solid #e4e3e3;
}
.kefu{
    height: 2rem;
    margin-top: 1.2rem;
}
.kefu .serves{
    width: 5rem;
    height: 2.6rem;
    float: left;
    text-align: center;
    border-right: .0025rem solid #e4e3e3;
    box-sizing: border-box;
    border-bottom: .0025rem solid #e4e3e3;
}
.kefu .serves:nth-child(2){
    border-right: none;
}
.kefu .serves:nth-child(1) .iconfont{
    color: rgb(235, 113, 14);
}
.kefu .serves:nth-child(2) .iconfont{
    color: rgb(60, 252, 34);
}
.kefu .serves .iconfont{
    font-size: .7rem;
}
.kefu .serves p:nth-child(1){
    padding-top: .5rem;
}
.kefu .serves p:nth-child(2){
    font-size: .4rem;
    line-height: 1.2rem;
}
a{
    color: #fff;
}
a .iconfont{
    font-size: .6rem;
}
</style>