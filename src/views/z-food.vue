<template>
  <div class="food">
    <Shead>
      <template v-slot:left>
        <i class="iconfont icon-jiantou" @click="backBtn"></i>
      </template>
      <template v-slot:center>
        <a href="home">{{title}}</a>
      </template>
    </Shead>
    <div class="sort_container">
      <div class="sort_item">
          <div>奶茶果汁</div>
      </div>
      <div class="sort_item">
          <div>排序</div>
      </div>
      <div class="sort_item">
          <div>筛选</div>
      </div>
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
    this.title = this.$route.query.title;
    this.list();
  },
  methods: {
    backBtn() {
      this.$router.back(-1);
    },
    list() {
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

<style scopend>
a{color: #fff;}
.sort_container {
    position: fixed;
    left: 0;
    top: 90px;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid  #f1f1f1;
    display: flex;
    z-index: 5;
}
.sort_item{
    flex: 1;
    line-height: 70px;
    font-size: 24px;
    color: #444;
    text-align: center;
}
.sort_item>div{
    border-right: 1px solid #f1f1f1;
}
</style>

