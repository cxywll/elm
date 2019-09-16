<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
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
 .clearfix::after,
.clearfix::before {
    content: '';
    display: table;
}
.clearfix::after {
    clear: both;
}
.clearfix {
    zoom: 1;
}

</style>
