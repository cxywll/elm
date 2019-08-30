<template>
    <div class="food">
        <Shead>
         <template v-slot:left><i class="iconfont"><</i></template>
        <template v-slot:center><a href="home">{{title}}</a></template>
    </Shead>
    </div>
</template>

<script>
import Shead from '../components/Shead'
export default {
    name:"food",
    data(){
        return{
            title:'',
      commodity: [] //商品
        
        }
    },
    components:{
        Shead
    },
    created(){
        console.log(this.title=this.$route.query.title)
    }
}
</script>

<style>

</style>

