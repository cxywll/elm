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
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 1.2rem;
    background-color: #3190e8;
    font-size: 0.6rem;
    overflow: hidden;
    z-index: 5;
}
.left{
    float: left;
    line-height: 1.2rem;
    color: #fff;
    padding-left: 0.2rem;
}
.left .iconfont{
    font-size: 0.6rem;
}
.center{
    width: 55%;
    position: absolute;
    left: 50%;
    margin-left: -30%;
    top: 0;
    text-align: center;
    font-size: .5rem;
    font-weight: bold;
    line-height: 1.2rem;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.right{
    float: right;
    font-size: 0.4rem;
    line-height: 1.2rem;
    color: #fff;
    padding-right: 0.2rem;
}
</style>