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
h1,
ul,
li {
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
  filter: alpha(Opacity=50); /*IE8 以及更早的版本支持替代的 filter 属性 */
  -moz-opacity: 0.5;
  opacity: 0.5;
  width: 100%;
  height: 100%;
}
</style>
