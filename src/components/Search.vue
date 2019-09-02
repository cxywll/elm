<template>
    <div>
       <Shead>
        <template v-slot:left>10</template>
        <template v-slot:center>11</template>
        <template v-slot:right>12</template>
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