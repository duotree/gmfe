import Vue from "vue";
import Router from "vue-router";
import login from "@/components/login/login";
import main from "@/components/main";
import helloworld from "@/components/HelloWorld";
import userlist from "@/components/user/userlist";
import serverlist from "@/components/server/serverlist";
import test from "@/components/test";
import roleinfo from "@/components/role/roleinfo";
import roledata from "@/components/playerdata/roledata";
import rolebasicinfo from "@/components/playerdata/rolebasicinfo";
import serverlistpanel from "@/components/server/serverlistpanel";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
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
        },
        {
          path: "/gmServer/serverlist",
          component: serverlist
        },
        {
          path: "/gmServer/serverlistpanel",
          component: serverlistpanel
        },
        {
          path: "/gmServer/test",
          component: test
        },
        {
          path: "/gmServer/roleinfo",
          component: roleinfo
        },
        {
          path: "/gmServer/roledata",
          component: roledata
        },
        {
          path: "/gmServer/rolebasicinfo",
          component: rolebasicinfo
        }
      ]
    }
  ]
});
