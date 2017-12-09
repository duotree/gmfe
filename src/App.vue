<template>
  <div id="app">
    <div :class="{modal: isModal}">
    </div>
    <router-view></router-view>
    <router-view name="main"></router-view>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isModal: false
    };
  },
  mounted() {
    this.$bus.$on("modal", this.beModal);
  },
  methods: {
    beModal(flag) {
      this.isModal = flag;
    }
  }
};
</script>

<style>
html,
body,
div,
h1 {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 600px;
  position: relative;
}
.app-content {
  height: 100%;
  width: 100%;
}
.modal {
  position: absolute;
  background: #eee;
  z-index: 2;
  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);
}
</style>
