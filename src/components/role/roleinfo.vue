<template>
  <div id="roleInfo">
    <div class="searchArea">
      <fieldset v-show="searchRoleSimple">
        <legend>角色信息查询</legend>
        <label>角色ID:</label>
        <input type="text" name="roleid" v-model="roleid" placeholder="输入角色Id" />
        <button class="btn">查询角色信息</button>
      </fieldset>
      <fieldset v-show="!searchRoleSimple">
        <legend>角色信息查询</legend>
        <label for="">查询数据类型:</label>
        <select name="searchType">
          <option value="1">角色信息查询</option>
          <option value="2">角色信息查询(按名称)</option>
          <option value="3">角色封停查询</option>
          <option value="4">禁言查询</option>
          <option value="5">根据aid查询角色</option>
        </select>
        <label for="">角色Id:</label>
        <input type="text" name="roleid" v-model="roleid" palceholder="输入角色Id" />
        <button class="btn" @click="searchRoleInfo()">查询</button>
      </fieldset>
    </div>
    <div class="rolelist-content">
      <table>
        <thead>
          <tr>
            <th class="thcls">角色Id</th>
            <th class="thcls">角色名称</th>
            <th class="thcls">账号</th>
            <th class="thcls">角色类型</th>
            <th class="thcls">vip等级</th>
            <th class="thcls">角色等级</th>
            <th class="thcls">充值rmb</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="role in rolelist" @contextmenu="getContentMenu(role,$event)">
            <td class="tdcls">{{ role.roleId }}</td>
            <td class="tdcls">{{ role.roleName }}</td>
            <td class="tdcls">{{ role.userId }}</td>
            <td class="tdcls">{{ role.roleType }}</td>
            <td class="tdcls">{{ role.vip }}</td>
            <td class="tdcls">{{ role.level }}</td>
            <td class="tdcls">{{ role.rmb }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <rightmenu :menuData="menuData" :showRightMenu="showRightMenu" @modifyRoleInfo="modifyRole" @slincedRoleInfo="slincedRoleInfo" @unslincedRoleInfo="unslincedRoleInfo"></rightmenu>
  </div>
</template>
<script>
import rightmenu from "../util/rightmenu";
export default {
  name: "roleinfo",
  components: {
    rightmenu
  },
  data() {
    return {
      searchRoleSimple: false,
      roleid: null,
      rolelist: [
        {
          level: 60,
          rmb: 0,
          roleId: 11000001,
          roleName: "30818901",
          roleType: 2,
          userId: "30198940_15215128",
          vip: 0
        }
      ],
      showRightMenu: false,
      menuData: {
        menuName: "roleInfoRightMenu",
        axios: { x: null, y: null }, //菜单位置
        menuList: [
          {
            name: "修改玩家信息", // 菜单项名称
            fnHandler: "modifyRoleInfo" // 菜单项执行函数
          },
          {
            name: "玩家禁言", // 菜单项名称
            fnHandler: "slincedRoleInfo" // 菜单项执行函数
          },
          {
            name: "玩家解禁言", // 菜单项名称
            fnHandler: "unslincedRoleInfo" // 菜单项执行函数
          }
        ]
      }
    };
  },
  methods: {
    searchRoleInfo() {},
    getContentMenu(role, event) {
      event = event || window.event;
      event.preventDefault(); // 阻止默认右键菜单
      var x = event.clientX;
      var y = event.clientY;
      this.showRightMenu = true;
      this.menuData.axios = { x, y };
    },
    modifyRole() {
      alert("modify role info");
    },
    slincedRoleInfo() {
      alert("slinced role info");
    },
    unslincedRoleInfo() {
      alert("unslinced role info");
    }
  }
};
</script>

<style>
#roleInfo {
  height: 100%;
}

#roleInfo .searchArea {
  height: 15%;
}

#roleInfo .searchArea fieldset {
  border: 1px solid #eee;
}

#roleInfo .searchArea select {
  display: inline-block;
}
#roleInfo .searchArea label {
  margin-left: 8px;
}

#roleInfo .searchArea input,
#roleInfo .searchArea select {
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  box-sizing: border-box;
  width: 240px;
  border: 1px solid #eee;
}

#roleInfo .searchArea .btn {
  background: #984377;
  color: #fff;
  font-weight: bold;
  outline: none;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}

#roleInfo .searchArea .rolelist-content {
  height: 85%;
  position: relative;
}

#roleInfo .rolelist-content table {
  border-collapse: collapse;
  width: 100%;
  height: 100%;
}
#roleInfo .rolelist-content thead {
  height: 17px;
}

#roleInfo table thead,
#roleInfo tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

#roleInfo .rolelist-content tbody {
  height: calc(100% - 17px);
  overflow-y: auto;
}

#roleInfo tbody::-webkit-scrollbar {
  width: 10px;
}

/*滚动条背景*/
#roleInfo tbody::-webkit-scrollbar-track {
  background: none;
}

/*滚动条颜色*/
#roleInfo tbody::-webkit-scrollbar-thumb {
  background-color: #984377;
}

/*滚动条颜色*/
#roleInfo tbody::-webkit-scrollbar-thumb:hover {
  background-color: #cd6889;
}

#roleInfo .thcls {
  border-bottom: 2px solid #ddd;
}

#roleInfo .tdcls {
  border-bottom: 1px dotted #ddd;
  text-align: center;
  padding: 10px 0px;
}

/* 右键菜单 */
#roleInfo .rightmenu {
  width: 100px;
  background: #fff;
  position: absolute;
}

#roleInfo .rightmenu ul {
  border: 1px solid #ddd;
  text-align: center;
}

#roleInfo .rightmenu ul li {
  list-style: none;
  border-bottom: 1px dotted #ddd;
  padding: 5px 0px;
}
</style>


