<template>
  <div id="main" v-bind:style="{width:width + 'px', height:height + 'px'}">
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
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
  },
  mounted() {
    window.addEventListener("resize", this.windowResize, true);
  },
  methods: {
    windowResize() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
    }
  }
};
</script>

<style>
#main .maincontent{
  width: 80%;
  margin: 0 auto;
  margin-top: 15px;
}

#main .top {
  height:10%;
  border:2px solid #ddd;
}

#main .sidebar {
  width: 10%;
  float: left;
  border: 2px solid #ddd;
  border-top: none;
  box-sizing: border-box;
  height: 89%;
}

#main .content {
  width: 90%;
  float: left;
  padding-left:20px;
  box-sizing: border-box;
  
}
</style>


