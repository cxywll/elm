<template>
    <div>
        <Shead>
             <template v-slot:left>
                <router-link :to="{path:'/Mine'}">
                <i class="iconfont icon-jiantou"></i>
                </router-link>
            </template>
            <template v-slot:center>
                <router-link :to="{path:'/'}">我的优惠券</router-link>
            </template>
        </Shead>
        <div class="type">
            <div class="t_name">
                <router-link  to='/Squan/Shong' active-class="active">
                    <span>红包</span>
                </router-link>
            </div>
            <div class="t_name">
                <router-link to='/Squan/Sshopper' active-class="active">
                    <span>商家代金券</span>
                </router-link>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>
import Shead from '../components/Shead.vue'
export default {
    components: {
        Shead
    }
}
</script>
<style scoped>
.type .active{
    color: #3190e8;
    border-bottom: .05rem solid #3190e8;
    padding-bottom: .075rem;
}
.type{
    width: 100%;
    height: 1rem;
    font-size: .4rem;
    margin-top: 1.2rem;
}
.type .t_name{
    width: 50%;
    padding-top: .2rem;
    float: left;
    text-align: center;
}
.type a{
    color: #000;
}
a{
    color: #fff;
}
.left .iconfont{
    font-size: .5rem;
    font-weight: bold;
}
</style>