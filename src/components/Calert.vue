<template>
  <el-button class="openbut" type="text" @click="open">确认支付</el-button>
</template>

<script>
export default {
    methods: {
      open() {
        this.$alert('当前环境无法支付，请打开官方APP进行付款', '抱歉：', {
          dangerouslyUseHTMLString: true
        });
      }
    }
  }
</script>

<style scoped>
*{margin: 0;padding: 0;}
.openbut{
    width: 80%;
    height: 100px;
    background-color: greenyellow;
}
.el-button--text{
    color: red;
    font-size: 35px;
}
.el-button{
    margin: 0 auto;
}
</style>