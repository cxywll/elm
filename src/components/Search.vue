<template>
    <div>
       <Shead>
        <template v-slot:left>10</template>
        <template v-slot:center>11</template>
        <template v-slot:right>12</template>
      </Shead>
    </div>
</template>
<script>
import Shead from './Shead.vue'
export default {
  name: 'Search',
  components: {
    Shead,
  }
}
</script>