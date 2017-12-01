<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="main"></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
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
}
</style>
