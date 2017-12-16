// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "font-awesome/css/font-awesome.css";

Vue.config.productionTip = false;
const bus = new Vue();
Vue.prototype.$bus = bus;
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
