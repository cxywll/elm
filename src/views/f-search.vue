<template>
  <div class="about">
    <div class="title">
      <span style="margin-right: 120px;">
        <router-link to="/" style="color: white; font-size:30px">&lt;</router-link>
      </span>
      <span style="font-weight: 600;font-size:16px;">{{arr.name}}</span>
      <span style="float: right;">
        <router-link to="/" style="color: white;font-size: 14px;">切换城市</router-link>
      </span>
    </div>
    <!-- 搜索＋下拉历史 -->
    <div class="sear">
      <input type="text" v-model="val" placeholder="输入学校,商务楼,地址" @change="fouce" />
      <button @click="submits">提交</button>
      <ul v-if="val" class="list_s">
        <li
          v-for="(i,index) in arr_s"
          style="height:20px;background:#ccc;"
          :key="index"
        >{{index+1}}.{{i}}</li>
      </ul>
    </div>
    <!-- 搜索数据输出-->
    <ul v-if="data_list" style="list-style: none;min-height:60px;">
      <router-link :to="{name:"Zmsite",query:{data:i.name}}"
        v-for="(i,$index) in data_list"
        :key="$index"
      >
        <li class="sear_list" @click="history(i)">
          <p>{{i.name}}</p>
          <span class="a" style="color: #999;font-size: 15px">{{i.address}}</span>
        </li>
      </router-link>
    </ul>
    <!-- 搜索历史记录 -->
    <div class="historybox" v-if="data_list">
      <div class="history">搜索历史</div>
      <div class="box" v-for="(item,$index) in select" :key="$index">
        <div @click="rap">
          <router-link :to="{name:"Zmsite",query:{data:item.split(",")[0]}}">
            <p style="font-size:14px;color:dodgerblue;">{{item.split(',')[0]}}</p>
            <p style="color:#cccc;">{{item.split(',')[1]}}</p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 清空历史记录 -->
    <div v-if="data_list">
      <button class="empty_history" @click="e_history">清空所有</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import { constants } from "crypto";

export default {
  data() {
    return {
      id: "",
      arr: {},
      val: "",
      err: "",
      data_list: [],
      login: [],
      str: "",
      select: [],
      arr_s: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    if (localStorage.login) {
      this.select = localStorage.login.split("&");
    } else {
      this.select = [];
    }
    this.select.pop();
    // console.log(this.arr)
    this.a();
    console.log(this.login);
    console.log(this.$route);
  },
  methods: {
    a() {
      this.axios
        .get("https://elm.cangdu.org/v1/cities/" + this.id)
        .then(data => {
          this.arr = data.data;
        });
    },
    submits() {
      if (this.val == "") {
        this.data_list = "";
        this.err = "请输入搜索内容";
      } else {
        this.axios
          .get(
            "https://elm.cangdu.org/v1/pois?city_id=" +
              this.id +
              "&keyword=" +
              this.val
          )
          .then(data => {
            if (data.data.message != "参数错误") {
              this.err = "";
              this.data_list = data.data;
              console.log(this.data_list);
            } else {
              this.data_list = "";
              this.err = "无搜索结果";
            }
          });
      }
      console.log(this.login);
    },
    history(i) {
      this.login.push([i.name, i.address + "&"]);
      localStorage.login += this.login;
    },
    fouce() {
      this.arr_s.push(this.val);
    },
    e_history() {
      this.select = [];
      localStorage.login = "";
    },
    rap() {}
  }
};
</script>
<style scoped>
* {
  list-style-type: none;
}
.about {
  min-height: 600px;
  background: #f5f5f5;
  padding-top: 50px;
}
.sear {
  height: 200px;
  background: white;
  padding: 20px 40px;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.sear > input {
  width: 100%;
  height: 60px;
  text-indent: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  border: 1px solid #cccccc;
  margin-bottom: 20px;
}
.sear > button {
  width: 100%;
  height: 60px;
  background: dodgerblue;
  border: none;
  color: white;
  border-radius: 5px;
  outline: none;
}
.about ul {
  width: 100%;
  min-height: 100px;
}
.about ul a {
  display: inline-block;
  width: 100%;
  height: 150px;
}
.about ul li {
  width: 100%;
  height: 135px;
  background: white;
  box-sizing: border-box;
  padding-left: 35px;
}
.about ul li p {
  font-size: 30px;
}
.about ul li span {
  font-size: 30px;
}
.a {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
}
.box {
  width: 100%;
  height: 100px;
  overflow: hidden;
  margin-left: 40px;
  margin-top: 5px;
}
.historybox {
  width: 100%;
}
.history {
  width: 100%;
  font-size: 13px;
  background: #d4d4d471;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}
.list_s {
  height: 20px;
  position: relative;
  z-index: 12;
  /* border: 1px solid red; */
}
.empty_history {
  width: 80%;
  height: 60px;
  margin-left: 60px;
  background: #cccccc;
  border: none;
  color: white;
  border-radius: 5px;
  /* position: absolute; */
  outline: none;
}
</style>