<template>
  <div id="main">
    <div class="top">
      this is the top
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
    return {};
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
  height: 100px;
  border: 2px solid #ddd;
  box-sizing: border-box;
}

#main .maincontent {
  width: 80%;
  margin: 0 auto;
  margin-top: 15px;
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
}
</style>


