<template>
  <div id="sidebar">
    <ul>
      <li v-for="pmenu in pmenus" class="pmenu">
        <a href="#" class="pa" v-on:click.stop="showorhide(pmenu.id)"> {{ pmenu.title }} </a>
        <ul v-bind:class="{'showMenu': choose_menu_id == pmenu.id, 'hideMenu': choose_menu_id != pmenu.id }">
          <li class="submenu" v-for="item in pmenu.subList" v-bind:class="{'active': choose_submenu_id == item.id}">
            <a href="#" class="suba" v-on:click.stop="showPage(item.id)">{{ item.title }} </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "sidebar",
  data() {
    return {
      pmenus: [
        {
          id: 1,
          subList: [{ id: 101, title: "\u7528\u6237\u7BA1\u7406" }],
          title: "\u767B\u5F55\u7BA1\u7406"
        },
        {
          id: 2,
          subList: [
            { id: 201, title: "发送邮件" },
            // { id: 202, title: "发送全局邮件" },
            { id: 203, title: "邮件查询" },
            { id: 204, title: "公告推送" },
            { id: 205, title: "黑白名单" },
            { id: 206, title: "游戏公告" }
          ],
          title: "补偿/公告"
        },
        {
          id: 3,
          subList: [
            { id: 301, title: "服务器信息" },
            { id: 302, title: "全局数据" },
            { id: 303, title: "登录服务器数据" }
          ],
          title: "服务器数据"
        },
        {
          id: 4,
          subList: [
            { id: 401, title: "角色基本信息" },
            { id: 402, title: "角色数据" }
          ],
          title: "玩家数据"
        }
      ],
      choose_menu_id: 0, // 记录选中父菜单的id
      choose_submenu_id: 0, // 选中子菜单id
      linkedMenu: {}
    };
  },
  mounted() {
    this.linkedMenu[101] = "/gmServer/userlist";
    this.linkedMenu[201] = "/gmServer/login";
    this.linkedMenu[203] = "/gmServer/login";
    this.linkedMenu[204] = "/gmServer/login";
    this.linkedMenu[205] = "/gmServer/login";
    this.linkedMenu[206] = "/gmServer/login";
    this.linkedMenu[301] = "/gmServer/serverlistpanel";
    this.linkedMenu[401] = "/gmServer/rolebasicinfo";
    this.linkedMenu[402] = "/gmServer/roledata";
  },
  methods: {
    showorhide(id) {
      this.choose_menu_id = id;
    },
    showPage(subid) {
      this.choose_submenu_id = subid;
      // 根据subid 填入对应链接地址,暂时统一写一个
      this.$router.push(this.linkedMenu[subid]);
    }
  }
};
</script>

<style>
#sidebar {
  height: 100%;
  font-size: 14px;
}
#sidebar a {
  text-decoration: none;
}

#sidebar .pmenu .pa {
  color: #fff;
  background-color: #1e7dd7;
  border-color: rgba(32, 160, 255, 0.2);
  width: 100%;
  height: 30px;
  display: inline-block;
  padding: 5px 0px 5px 10px;
  box-sizing: border-box;
  font-weight: bold;
}

#sidebar .submenu {
  color: #20a0ff;
  /* background:  #540303; */
  padding: 5px 20px;
  box-sizing: border-box;
}

#sidebar .submenu .suba {
  color: #20a0ff;
}

#sidebar .submenu:hover {
  background-color: rgba(32, 160, 255, 0.1);
  border-color: rgba(32, 160, 255, 0.2);
}

#sidebar .active {
  background-color: rgba(32, 160, 255, 0.1);
  border-color: rgba(32, 160, 255, 0.2);
}

#sidebar .hideMenu {
  display: none;
}
#sidebar .showMenu {
  display: block;
}

/* #sidebar ul {
        background: #b30707;
        color:#473232;
        font-weight: bold;
        font-size: 1.2rem;
    }

    #sidebar ul li {
        background: #781d1d;
        color: #000;
        font-weight: bold;
        font-size: 1rem;

    } */

ul,
ul li {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
