<template>
    <div class="app">
      <Shead>
          <template v-slot:left><i class="iconfont icon-jiantou"></i></template>
          <template v-slot:center>订单列表</template>
      </Shead>
      <Sfoot></Sfoot>
    </div>
</template>
<script>
import Shead from './Shead.vue'
import Sfoot from './Sfoot.vue'
export default {
  name: 'List',
  components: {
    Shead,
    Sfoot
  }
}
</script>