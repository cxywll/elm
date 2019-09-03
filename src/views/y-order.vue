<template>
        <div>
            <div class="box">
                <div class="content clearfix">
                    <!-- 左侧菜单 -->
                    <ul class='product'>
                        <li @click='xianshi(index)' v-for='(item,index) in arr' :class="{'active':i==index}" :key="index">
                            {{item.type}}
                        </li>
                    </ul>
                    <!-- 右侧具体信息 -->
                    <div class='information'>
                        <div class="nav">
                            <ul class='list'>
                                <li>商品</li>
                                <li>评价</li>
                            </ul>
                        </div>
                        <!-- 右侧商品列表 -->
                        <div class='item-box clearfix' v-for='(item,index) in list' :key="index">
                            <div class="img">
                                <img :src="item.img" alt="">
                            </div>
                            <div class="text">
                                <h3>{{item.text}}</h3>
                                <div class='bt'>
                                    <span class='price'>{{item.price}}</span>
                                    <p>
                                        <span class='jian' @click='del(item)'>-</span>
                                        {{item.num || 0}}
                                        <span class='jia' @click='add(item)'>+</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <footer class='footer'>
                    总价:{{total}}元
                    <!-- 实现页面的跳转  to 默认是a标签-->
                    <router-link :to="{name:'shoppingCart',params:{selectList}}">去结算</router-link>
                </footer>
            </div>
        </div>
    </template>
    
    <script> 
         
        var selectGoods = {
            template: '#selectGoods',
            data() {
                return {
                    currentCategory: 0,
                    arr: [{
                        type: '热销商品',
                        code: [{
                            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1313270453,3807247283&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img02.tooopen.com/images/20150414/tooopen_sy_118451441751.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img4.imgtn.bdimg.com/it/u=2851445260,1524768388&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img2.imgtn.bdimg.com/it/u=4259438085,1196209161&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img1.imgtn.bdimg.com/it/u=989743373,1247199668&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img2.imgtn.bdimg.com/it/u=3941718376,2643720830&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'http://img1.imgtn.bdimg.com/it/u=1898610548,51609395&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }
                            , {
                            img: 'http://img0.imgtn.bdimg.com/it/u=2611172137,4195398711&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '优选水果',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=270613959,1981868654&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3746385074,1140602455&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2929614044,2614709093&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1159558640,543848856&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1130404426,1788912373&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2929614044,2614709093&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2446440385,2674115126&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2361039587,1911492176&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=591731724,2807699705&fm=26&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }],
                    },
                    {
                        type: '卤味熟食',
                        code: [{
                            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=891543169,1646849409&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1925523793,1792055423&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2746186180,730858575&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1141338740,1367994576&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '牛奶面包',
                        code: [{
                            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=792914383,750654932&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1908930410,3356823207&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '热饮',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2951920470,3970239851&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2522866663,1798252010&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '休闲零食',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1427332273,3339980770&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132824135,2844314173&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '啤酒饮料',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1427332273,3339980770&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132824135,2844314173&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '数码家电',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1427332273,3339980770&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132824135,2844314173&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '户外运动',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1427332273,3339980770&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132824135,2844314173&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    {
                        type: '方便速食',
                        code: [{
                            img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1427332273,3339980770&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        },
                        {
                            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132824135,2844314173&fm=27&gp=0.jpg',
                            text: '新鲜青柠500g/皇新鲜特价新鲜特价新鲜待价',
                            price: '￥10.8',
                        }]
                    },
                    ],
                    list: [],
                    i: 0,
                }
            },
            methods: {
                xianshi(index) {
                    this.list = this.arr[index].code;
                    this.i = index;
                },
                del(item) {
                    if (item.num) {
                        if (item.num == 0) return;
                        item.num--;
                    }
                },
                add(item) {
                    console.log(item)
                    if (item.num) {
                        item.num++;
                    } else {
                        Vue.set(item, 'num', 1);
                    }
                }
            },
            computed: {
                selectList() {
                    var array = [];
                    this.arr.forEach(element => {
                        if (element.code && element.code.length > 0) {
                            element.code.forEach(el => {
                                if (el.num) {
                                    array.push(el);
                                }
                            });
                        }
                    });
                    return array;
                },
                total() {//计算商品总价
                    var n = 0;
                    this.selectList.forEach(element => {
                        n += (element.price).split('￥')[1] * element.num;
                    });
                    return n.toFixed(2);
                }
            },
            watch: {
                selectList(v1,v2) {

                }
            }    
        }
        // 第二个组件
        var shoppingCart = {
            template:'#shoppingCart',
            data() {
                return {
                    goodlist: this.$route.params.selectList||[]                  
                }
            },
            computed: {
                total() {//计算商品总价
                    var n = 0;
                    console.log(this.selectList)
                    this.goodlist.forEach(element => {
                        n += (element.price).split('￥')[1] * element.num;
                    });
                    return n.toFixed(2);
                }
            },
           
            
        }
        
    </script>
