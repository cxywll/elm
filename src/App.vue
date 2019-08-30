<template>
  <div id="app">
    <Sfoot></Sfoot>
    <router-view/>
  </div>
</template>
<script>
import Sfoot from './components/Sfoot.vue'
export default {
  components: {
    Sfoot
  },
}
</script>
<style>
*{margin: 0;padding: 0;text-decoration: none}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
