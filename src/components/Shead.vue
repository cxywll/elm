<template>
    <div class="S-head">
        <span class="left"><slot name="left"></slot></span>
        <span class="center"><slot name="center"></slot></span>
        <span class="right"><slot name="right"></slot></span>
    </div>
</template>
<script>
export default {
    name:'Shead',
}
</script>
<style scoped>
.S-head{
  height: 1.2rem;
  background-color: #3190e8;
  font-size: 0.6rem;
}
.left{
    float: left;
    line-height: 1.2rem;
    color: #fff;
    padding-left: 0.2rem;
}
.left .iconfont{
    font-size: 0.6rem;
    font-weight: bold;
}
.center{
    width: 80%;
    font-weight: bold;
    position: absolute;
    left: 50%;
    margin-left: -40%;
    top: 0;
    text-align: center;
    line-height: 1.2rem;
    color: #fff;
}
.right{
    float: right;
    line-height: 1.2rem;
    color: #fff;
    padding-right: 0.2rem;
}
</style>