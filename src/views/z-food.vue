<template>
  <div class="food">
    <Shead>
      <template v-slot:left>
          <i class="iconfont" @click="backBtn">返回</i>
      </template>
      <template v-slot:center>
        <a href="home">{{title}}</a>
      </template>
    </Shead>
    <div>
        
    </div>
  </div>
</template>

<script>
import Shead from "../components/Shead";
export default {
  name: "food",
  data() {
    return {
      title: "",
      commodity: [] //商品
    };
  },
  components: {
    Shead
  },
  created() {
    this.title = this.$route.query.title
    this.list()
  },
  methods:{
      backBtn(){
          this.$router.back(-1)
      },
      list(){
          this.$http
        .get("http://elm.cangdu.org/shopping/restaurants", {
          params: {
            latitude: "31.00455",
            longitude: "121.23323",
            offset: "0",
            limit: "20"
          }
        })
        .then(data => {
          this.commodity = data.data;
        });
      }
  }
};
</script>

<style>
</style>

