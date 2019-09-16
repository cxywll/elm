<template>
    <div>
        <Shead>
            <template v-slot:left><router-link to='/fadd' style="color:#fff;">&lt;</router-link></template>
            <template v-slot:center>添加地址</template>        
        </Shead>
        <div class="box">
            <div class="name">
                <p>联系人</p>
                <input type="text" name="name" placeholder="你的名字" v-model="val" >
                <div class="man">
                    <p>先生</p>
                    <i class=""> </i>
                </div>                       
            </div>


            <div class="phone">
                <p>联系电话</p>
                <input type="text" name="name" placeholder="你的手机号" v-model="phone">
                <span class="iconfont" @click="datatype=!datatype">&#xe6c3;</span>
                <p class="none" v-show="datatype">
                    <input type="text" placeholder="备选电话">
                </p>
            </div>
             <div class="name">
                <p>联系地址</p>
                <router-link to='./fscadd'><input type="text" name="name" placeholder="小区，写字楼/学校等" v-model="name"></router-link>
                <p class="add">
                    <input type="text" placeholder="详细地址(如门牌号等)" v-model="address">
                </p>
            </div>


             <div class="bot">
                <p>联系人</p>
                <input type="text" name="name" placeholder="标签" v-model="check">                      
            </div>

            <div class="footer">
                <router-link :to="{path:'/fadd',query:{name:this.val,phone:this.phone,check:this.check,address:this.address,}}">

                    <button class="true" @click="btn">确定</button>

                </router-link>
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
            name:'',
            val:'',
            phone:'',
            check:'',
            value:'',
            address:''
        }
    },  
    created(){
        this.name = this.$route.query.city_name
    },
    components:{
        Shead
    },   
    methods:{
        btn(){
            if(name==''||val==''||phone==''||check==''||address==''){
                alert('输入不完整,请重新确认')
                
            }
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
    .boy{
        width: 10%;
        background:red; 
    }
    .sex input{
        height: 80px;
        position: relative;
        top: 80px;  
        right: 250px;
        border: none;
    }
</style>