<template>
    <div>
        <Shead>
            <template v-slot:left><router-link to='/fadd' style="color:#fff;">&lt;</router-link></template>
            <template v-slot:center>添加地址</template>        
        </Shead>
        <div class="box">
            <div class="name">
                <p>联系人</p>
                <input type="text" name="name" placeholder="你的名字" v-model="json.yourname" @input="ipt">
                <div class="man">
                    <p style="margin-left:100px;">先生</p>
                    <i class="iconfont icon-icon_tupianweixuanzhong icon" @click="change($event)"> </i>
                    <i class="iconfont icon-icon_tupianweixuanzhong icon1" v-show="xs"> </i>
                </div>    
                <div class="woman">
                    <p style="position:relative;left:180px;top:-33px;">女士</p>
                    <i class="iconfont icon-icon_tupianweixuanzhong icon" @click="change($event)"> </i>
                    <i class="iconfont icon-icon_tupianweixuanzhong icon1" v-show="ns"> </i>
                </div>                   
            </div>


            <div class="phone">
                <p>联系电话</p>
                <input type="text" name="name" placeholder="你的手机号" v-model="json.phone" @input="ipt">
                <span class="iconfont" @click="datatype=!datatype">&#xe6c3;</span>
                <p class="none" v-show="datatype">
                    <input type="text" placeholder="备选电话">
                </p>
            </div>
             <div class="name">
                <p>联系地址</p>
                <router-link to='./fscadd'>
                <input type="text" name="name" placeholder="小区，写字楼/学校等" v-model="json.name"></router-link>
                <p class="add">
                    <input type="text" placeholder="详细地址(如门牌号等)" v-model="json.address" @input="ipt">
                </p>
            </div>


             <div class="bot">
                <p>联系人</p>
                <input type="text" name="name" placeholder="标签" v-model="json.check" @input="ipt">                      
            </div>

            <div class="footer">
                <div>

                    <button class="true" @click="btn">确定</button>
                <!-- {{fex}} -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Shead from '../components/Shead'
export default {    
    data(){
        return{
            datatype:false,
            xs:true,
            ns:false,
            json:{
                name:'', //地址name
                yourname:'',//你的名字
                sex:'',
                phone:'',//电话号码
                address:'',//详细地址
                check:'',//标签
            }
        }
    },  
    created(){
        this.json.name = localStorage.adds_n
        // localstorage.name=this.name
        // localstorage.val=this.val
         localStorage.city_name=this.$route.query.city_name
         if(localStorage.json){
             this.json.yourname=JSON.parse(localStorage.json).yourname
             this.json.phone=JSON.parse(localStorage.json).phone
             this.json.check=JSON.parse(localStorage.json).check
             this.json.address=JSON.parse(localStorage.json).address
         }
    },
    components:{
        Shead
    },   
    methods:{
        ipt(){
            // localStorage.name=this.json.val
            // console.log(this.json)
            localStorage.json=JSON.stringify(this.json)
        },
        btn(){
            if(this.json.name==''||this.json.val==''||this.json.phone==''||this.json.check==''||this.json.address==''){
                alert('输入不完整,请重新确认')
            }else{
                this.$router.push({path:'/fadd',query:{name:this.json.yourname,
                                                sex:this.json.sex,
                                                phone:this.json.phone,
                                                address:this.json.address,
                                                check:this.json.check,}})
            }

        },
        change(event){
            this.ns = !this.ns;
            this.xs = !this.xs;
            // this.fex = event.path[1].innerText
            this.json.sex=event.path[1].innerText
            localStorage.json=JSON.stringify(this.json)
            console.log(JSON.parse(localStorage.json))
            
        }
    }
}
</script>
<style scoped>
    .box{
        margin-top:110px;
        width: 90%;
        margin-left: 5%;
        height: auto;
    }
    .name{
        height: 210px;  
        margin-top: 10px;
        margin-bottom: 10px;
        border-bottom:1px solid rgb(236, 234, 234);
    }
     p{
        width: 150px;
        height: 100px;
        line-height: 120px;
    }
     input{
        height: 80px;
        float: right;
        position: relative;
        margin-top: -90px;
        margin-right: 30px;
        border: none;
        outline:none;
        bottom: -8px;
        border-bottom:1px solid rgb(236, 234, 234);
    }
    .sex{
        width: 60%;
        height: 100px;
        float: right;
        margin-right: 30px;
    }
    .iconfont{
        float: right;
        font-size: 50px;
        margin-top: -70px;
        margin-right: -20px;
        color: #3190e8;
    }
    .phone{
       border-bottom:1px solid rgb(236, 234, 234);
    }
    .none input{
        height: 80px;
        position: relative;
        top: 110px;
        left: 520px;
        border: none;
        outline:none;
        border-bottom:1px solid rgb(236, 234, 234);
    }
    .add input{
        height: 80px;
        position: relative;
        top: 110px;
        left: 520px;
        border: none;
        outline:none;
    }
    .true{
        width: 95%;
        height: 1rem;
        margin: 0.25rem 3%;
        background-color: #4cd964;
        color: #fff; 
        font-size: 0.4rem;
        margin-top: 10px;
        line-height: 1rem;
        text-align: center;
        border: none;
        border-radius: 0.06667rem;
    }
    .man i{
        position: relative;
        right: 435px;
        top: 5px;
    }
     .woman i{
        position: relative;
        top: -90px;
        right: 200px;
    }
    .icon{
        color: #ccc;
    }
</style>