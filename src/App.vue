<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Zmsite from './views/z-productList.vue'
export default {
  components: {
    Zmsite
  }
}
</script>
<style scoped>
*{margin: 0;padding: 0;text-decoration: none;list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
