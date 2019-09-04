<template>
  <div id="c-ddbox">
        <shead>
            <template v-slot:left><router-link to="/csfood" style="color:#fff;">&lt;   </router-link></template>
            <template v-slot:center>订单</template>
        </shead>
        <sfoot></sfoot>
  </div>
</template>

<script>
import shead from "../components/Shead";
import sfoot from "../components/Sfoot";
export default {
    components: {
        shead,
        sfoot
    },
}
</script>

<style>

</style>