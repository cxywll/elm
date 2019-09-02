<template>
    <div>
      <Shead>
        <template v-slot:left>1</template>
        <template v-slot:center>2</template>
        <template v-slot:right>3</template>
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