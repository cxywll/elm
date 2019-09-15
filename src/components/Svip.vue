<template>
    <div>
        <Shead>
            <template v-slot:left>
                <router-link to="/Mine">
                  <i class="iconfont icon-jiantou"></i>
                </router-link>
            </template>
            <template v-slot:center>会员中心</template>
        </Shead>
        <div class="vip_card">

        </div>
    </div>
</template>
<script>
import Shead from './Shead.vue'
export default {
    components: {
        Shead
    }
}
</script>
<style scoped>
a{
    color: #fff;
}
a .iconfont{
    font-size: .6rem;
}
</style>