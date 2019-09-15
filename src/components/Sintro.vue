<template>
    <div>
        <Shead>
			<template v-slot:left>
				<router-link to="/Sfuwu"><i class="iconfont icon-jiantou"></i></router-link>
			</template>
			<template v-slot:center>{{t_n}}</template>
        </Shead>
        <div class="content_c">
            <p>
                {{t_c}}
            </p>
        </div>
    </div>
</template>
<script>
import Shead from './Shead.vue'
export default {
    components: {
        Shead
    },
    data () {
        return {
            t_n:'',
            t_c:'',
        }
    },
    created () {
        this.t_n = this.$route.params.t_name;
        this.t_c = this.$route.params.t_content;
    }
}
</script>
<style scoped>
.content_c{
    width: 9.4rem;
    margin-top: 1.2rem;
    font-size: .6rem;
    padding: 0 .3rem;
}
.content_c p{
    width: 9.4rem;
    word-wrap:break-word;
}
a{
    color: #fff;
}
a .iconfont{
    font-size: .6rem;
}
</style>