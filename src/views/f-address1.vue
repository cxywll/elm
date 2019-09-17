<template>
    <div>
        <Shead>
            <template v-slot:left><router-link to='/zhifu' style="color:#fff;">&lt;</router-link></template>
            <template v-slot:center>选择地址</template>        
        </Shead>
        <!-- 新增收获地址 -->
       <router-link to='/fadd_add'>
       <div class="style">
           <span class="iconfont">&#xe726;</span>
            <p>新增收获地址</p>
        </div>
        </router-link>
        
        <!-- <router-link> -->
            <div class="head" >
                <p style="font-weight:bold;font-size:13px;">{{name}}</p>
                <span style="margin-left:80px;position:relative;top:-15px;">{{sex}}</span>
                <span style="float:left;margin-top:-30px;margin-left:120px;">{{phone}}</span>
                <li style="width:20px;height:15px;font-size:8px;background:#ff5722;color:white;border-radius:4px;margin-top:-5px;">{{check}}</li>
                <li style="margin-top:-18px;margin-left:30px;">{{address}}</li>        
            </div>
            
            
        <!-- </router-link> -->
        <router-view></router-view>
    </div>
</template>
<script>
import Shead from '../components/Shead'
export default {
    components:{
        Shead   
    },
    data(){
        return{
            name:'',
            sex:'',
            phone:'',
            address:'',
            check:'',
            arr:[],
        }
    },
    created(){
        this.name = localStorage.adds_n
        this.sex = this.$route.query.sex
        this.phone = this.$route.query.phone
        this.address = this.$route.query.address
        this.check = this.$route.query.check
        this.arr.push(this.$route.query)
        
        // localStorage.json = this.$route.query;
        // if(localStorage.json){
        //     // this.arr = JSON.parse(localStorage.json)
        // }else{
        //     this.arr = []
        // }
        console.log(this.arr)
        // if(name==''||val==''||phone==''||check==''||address==''){
        //         this.box.style.display='none' 
        //     }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
    .style{
        height: 50px;
        color: #3190e8;
        position: absolute;
        bottom: 20px;
        left: 45%;
        margin-bottom: 100px;
    }
    .iconfont{
        font-size: 80px !important;
        position: relative;
        top: 60px;
        right: 80px;
    }
    .head{
        height:120px;
        background: #ccc;   
        margin-top: 100px;
        border-bottom:1px solid red;
        padding-left: 100px;
    }
</style>