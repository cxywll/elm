<template>
    <div>
       <Shead>
        <template v-slot:left><i class="iconfont">&#xe62b;</i></template>
        <template v-slot:center>8</template>
        <template v-slot:right>9</template>
      </Shead>
      <Sfoot></Sfoot>
    </div>
</template>
<script>
import Shead from './Shead.vue'
import Sfoot from './Sfoot.vue'
export default {
  name: 'Outer',
  components: {
    Shead,
    Sfoot
  }
}
</script>