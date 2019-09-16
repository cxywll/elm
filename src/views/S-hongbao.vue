<template>
    <div>
        <div class="top">
            <p>有{{this.listlength}}个红包即将到期</p>
            <span style="float:right;color:#3190e8;"><a href="#">?</a>积分说明</span>
        </div>
        <ul class="hongbao_list_ul">
            <li class="hongbao_list_li" v-for="(item,index) in hbList" :key="index">
                <section data-v-841e3554="" class="list_item">
                    <div data-v-841e3554="" class="list_item_left">
                        <span data-v-841e3554="">¥</span> 
                        <span data-v-841e3554="">{{item.amount}}</span> 
                        <span data-v-841e3554="">.</span> 
                        <span data-v-841e3554="">0</span> 
                        <p data-v-841e3554="">{{item.description_map.sum_condition}}</p>
                    </div> 
                    <div data-v-841e3554="" class="list_item_right">
                        <h4 data-v-841e3554="">{{item.name}}</h4> 
                        <p data-v-841e3554="">{{item.end_date}}到期</p> 
                        <p data-v-841e3554="">{{item.description_map.phone}}</p>
                    </div> 
                    <div data-v-841e3554="" class="time_left">{{item.description_map.validity_delta}}</div>
                </section>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hbList:[],
            listlength:''
        }
    },
    created(){
        this.axios.get('https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0').then((res)=>{
            this.hbList = res.data
            console.log(res)
            this.listlength = res.data.length
        })
    }
}
</script>
<style scoped>
*{margin: 0;padding: 0;box-sizing: border-box;}
    .top{
        width: 100%;
        height: 90px;
        background-color: #ecebeb;
        padding:0.4rem 0.3rem;
        box-sizing: border-box; 
    }
    .top p{
        float: left;
    }
    .top span{
        float:right;
        font-size:0.35rem;
        color:#3190e8;
    }
    .top span a{
        display:inline-block;
        width:0.35rem;
        height:0.35rem;
        font-size:0.35rem;
        border-radius:50%;
        color:#fff;
        background:#3190e8;
        text-align:center;
        margin-right:0.08rem;
    }
    .hongbao_list_ul{
        height: 13.5rem;
        list-style: none;
        font-style: normal;
        text-decoration: none;
        border: none;
        color: #333;
        font-weight: 400;
        font-family: Microsoft Yahei;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        padding: 0 0.3rem;
        background-color: #ecebeb;
    }
    .hongbao_list_li{
        width: 100%;
        min-height: 3rem;
        background-size: .5rem .2rem;
        margin-bottom: .5rem;
        border-radius: .25rem;
        border-top: 5px solid #ff5340;
        background-color: #fff;
        /* margin-top: 0.5rem; */
    }
    .list_item{
        display: flex;
        justify-content: space-between;
        padding: 0.1rem .3rem .1rem;    
        list-style: none;
        font-style: normal;
        text-decoration: none;
        border: none;
        color: #333;
        font-weight: 400;
        font-family: Microsoft Yahei;
        box-sizing: border-box;
    }
    .list_item_left{
        text-align: center;
        border-right: .025rem dotted #ccc;
        flex: 1;
        padding-right: 0.2rem;
        padding-top: 0.5rem;
        box-sizing: border-box;
    }
    .list_item_left span:first-of-type{
        font-size: .35rem;
        color: #ff5340;
        font-weight: 700;
    }
    .list_item_left span:nth-of-type(2){
        font-size: .9rem;
        color: #ff5340;
        margin-left: 0.1rem;
    }
    .list_item_left span:nth-of-type(3){
        font-size: .3rem;
        color: #ff5340;
        font-weight: 700;
    }
    .list_item_left span:nth-of-type(4){
        font-size: .5rem;
        color: #ff5340;
        font-weight: 700;
    }
    .list_item_left p{
        font-size: .28rem;
        color: #999;
    }
    .list_item_right{
        flex: 2;
        margin-left: 1.5rem;
        padding-top: 0.65rem;
        box-sizing: border-box;
    }
    .list_item_right h4{
        font-size: .45rem;
        color: #666;
        font-weight: normal;
        margin-left: -.7rem;
    }
    .list_item_right p{
        list-style-type: disc;
        margin-left: -.7rem;
        font-size: .25rem;
        color: #999;
    }
    .time_left{
        font-size: .4rem;
        color: #ff5340;
        line-height: 120px;
    }
</style>