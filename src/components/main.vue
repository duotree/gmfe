<template>
  <div id="main">
    <div class="top">
      <header>魂之轨迹GM管理系统</header>
      <div class="userinfo">
        <span>当前用户：</span>
        <span>{{ username }}</span>
        <a href="/login">注销</a>
      </div>
    </div>
    <div class="maincontent">
      <div class="sidebar">
        <sidebar></sidebar>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from "./menu/sidebar";

export default {
  name: "main",
  components: {
    sidebar
  },
  data() {
    return {
      username: "test"
    };
  },
  methods: {}
};
</script>

<style>
#main {
  width: 100%;
  height: 100%;
}
#main .top {
  border-bottom: 2px solid #ddd;
  box-sizing: border-box;
  background: #1e7dd7;
  color: #fff;
  overflow: hidden;
  padding: 25px 30px;
}

#main .top header {
  float: left;
  font-weight: 700;
  font-size: 18px;
}
#main .top .userinfo {
  float: right;
  font-size: 14px;
}
#main .top .userinfo a {
  text-decoration: none;
  color: #fff;
  margin-left: 10px;
}

#main .maincontent {
  width: 80%;
  margin: 0px auto;
  overflow: hidden;
  height: calc(100% - 115px);
}

#main .sidebar {
  width: 210px;
  float: left;
  border: 1px solid #ddd;
  box-sizing: border-box;
  height: calc(100% - 2px);
}

#main .content {
  padding-left: 20px;
  box-sizing: border-box;
  overflow: hidden;
  height: calc(100% - 2px);
  margin-top: 15px;
}
</style>


