<template>
  <div id="rightmenu" :class="'rightMenu' + menuData.menuName" v-show="showRightMenu">
    <ul>
      <li v-for="(menu,index) in menuData.menuList">
        <a @click.stop="handler(menu)">{{ menu.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "rightmenu",
  props: {
    showRightMenu: false,
    menuData: {
      type: Object,
      require: false,
      default() {
        return {
          menuName: "",
          axios: { x: null, y: null }, //菜单位置
          menuList: [
            {
              name: "", // 菜单项名称
              fnHandler: "" // 菜单项执行函数
            }
          ]
        };
      }
    }
  },
  methods: {
    handler(menu) {
      this.$emit(menu.fnHandler);
    }
  },
  watch: {
    // 修改axion值时 没有触发此处
    "menuData.axions"(val) {
      var className = "rightMenu" + this.menuData.menuName;
      var menus = document.getElementsByClassName(className);
      console.log("menu", menu);
      console.log("val:", val);
    }
  }
};
</script>

<style>
#rightmenu {
  width: 100px;
  text-align: center;
}
#rightmenu ul {
  border: 1px solid #984377;
}
#rightmenu ul li {
  list-style: none;
  border-bottom: 1px dotted #984377;
}

#rightmenu li a {
  text-decoration: none;
  cursor: pointer;
}
</style>


