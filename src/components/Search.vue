<template>
    <div>
      <Shead>
          <template v-slot:left><i class="iconfont icon-jiantou"></i></template>
          <template v-slot:center>搜索</template>
      </Shead>
      <Sfoot></Sfoot>
    </div>
</template>
<script>
import Shead from './Shead.vue'
import Sfoot from './Sfoot.vue'
export default {
  name: 'Search',
  components: {
    Shead,
    Sfoot
  }
}
</script>