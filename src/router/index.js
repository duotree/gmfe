import Vue from "vue";
import Router from "vue-router";
import login from "@/components/login/login";
import main from "@/components/main";
import helloworld from "@/components/HelloWorld";
import userlist from '@/components/user/userlist';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/gmServer",
      name: "main",
      components: {
        main: main
      },
      children: [
        {
          path: "/gmServer/helloworld",
          component: helloworld
        },
        {
          path: "/gmServer/userlist",
          component: userlist
        }
      ]
    }
  ]
});
