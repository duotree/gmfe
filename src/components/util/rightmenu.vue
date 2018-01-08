<template>
  <div id="rightmenu" :class="'rightMenu' + menuData.menuName" display="none">
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
  mounted() {
    let rightmenu = document.getElementById("rightmenu");
    rightmenu.addEventListener("click", this.hideRightMenu);
    rightmenu.addEventListener("mouseleave", this.onmouseleave);
    rightmenu.addEventListener("mouseover", this.onmouseover);
  },
  methods: {
    handler(menu) {
      this.isShowMenu = false;
      this.$emit(menu.fnHandler);
    },
    hideRightMenu() {
      let rightmenu = document.getElementById("rightmenu");
      rightmenu.style.display = "none";
    },
    onmouseleave(event) {
      let rightmenu = document.getElementById("rightmenu");
      rightmenu.style.display = "none";
    },
    onmouseover() {
      let rightmenu = document.getElementById("rightmenu");
      rightmenu.style.display = "block";
    }
  },
  watch: {
    "menuData.axios"(val) {
      let rightmenu = document.getElementById("rightmenu");
      rightmenu.style.left = val.x + "px";
      rightmenu.style.top = val.y + "px";
      rightmenu.style.display = "block";
      this.menuData.axios = val;
    },
    showRightMenu(val) {
      this.isShowMenu = val;
    }
  }
};
</script>

<style>
#rightmenu {
  width: 100px;
  text-align: center;
  position: absolute;
  background: #fff;
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


