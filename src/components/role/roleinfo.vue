<template>
  <div id="roleInfo">
    <h3>角色列表</h3>
    <div class="searchArea">
      <div v-show="searchRoleSimple" class="searchArea-content">
        <!-- <legend>角色信息查询</legend> -->
        <label>角色ID:</label>
        <input type="text" name="roleid" v-model="roleid" placeholder="输入角色Id" />
        <button class="btn">查询角色信息</button>
      </div>
      <div v-show="!searchRoleSimple" class="searchArea-content">
        <!-- <legend>角色信息查询</legend> -->
        <label for="">查询数据类型:</label>
        <select v-model="searchType">
          <option value="1">角色信息查询</option>
          <option value="2">角色信息查询(按名称)</option>
          <option value="3">角色封停查询</option>
          <option value="4">禁言查询</option>
          <option value="5">根据aid查询角色</option>
        </select>
        <label for="" v-if="searchType != 2 && searchType != 5">角色Id:</label>
        <label for="" v-if="searchType == 2">角色名称:</label>
        <label for="" v-if="searchType == 5">角色AID:</label>
        <input type="text" name="roleid" v-model="roleid" palceholder="输入角色Id" v-if="searchType != 2 && searchType != 5" />
        <input type="text" name="rolename" v-model="rolename" palceholder="输入角色名称" v-if="searchType == 2" />
        <input type="text" name="roleaid" v-model="roleaid" palceholder="输入角色AID" v-if="searchType == 5" />
        <button class="btn" @click="searchRoleInfo()">查询</button>
      </div>
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
    <rightmenu :menuData="menuData" v-show="showRightMenu" @modifyRoleInfo="showModifyRoleInfo" @slincedRoleInfo="showSlincedRoleInfo" @unslincedRoleInfo="showUnslincedRoleInfo"
    @operateRoleSubject="showOperateRoleSubjectPanel"></rightmenu>
    <!-- 玩家禁言 解禁言 -->
    <div v-show="showSlincedRoleInfoPanel" class="roleInfoPanel">
      <div class="head">
        <h4>{{ roleInfoPanelTitle }}</h4>
        <span class="close-icon">
          <i class="fa fa-times" aria-hidden="true" @click="closeRolePanel"></i>
        </span>
      </div>
      <div>
        <label>角色ID</label>
        <input type="text" v-model="selectRole.roleId" placeholder="角色id" readonly/>
      </div>
      <div>
        <label>角色名称</label>
        <input type="text" v-model="selectRole.roleName" placeholder="输入角色名称" readonly/>
      </div>
      <div v-show="showSlincedTime">
        <label>禁言时间</label>
        <input type="text" v-model="selectRole.slincedTime" placeholder="输入禁言时间，单位为分钟" />
      </div>
      <div>
        <label>剩余禁言时间</label>
        <input type="text" v-model="lastSlincedTime" readonly/>
      </div>

      <div class="btngroup">
        <button class="buttonCls" @click="slincedRoleInfo">禁言</button>
        <button class="buttonCls" @click="closeRolePanel">取消</button>
      </div>
    </div>
    <!-- 修改玩家信息 -->
    <div v-show="showRoleInfoPanel" class="roleInfoPanel">
      <div class="head">
        <h4>{{ roleInfoPanelTitle }}</h4>
        <span class="close-icon">
          <i class="fa fa-times" aria-hidden="true" @click="closeRolePanel"></i>
        </span>
      </div>
      <div>
        <label>角色ID</label>
        <input type="text" v-model="selectRole.roleId" placeholder="角色id" readonly/>
      </div>
      <div>
        <label>角色名称</label>
        <input type="text" v-model="selectRole.roleName" placeholder="输入角色名称" readonly/>
      </div>
      <div>
        <label>账号</label>
        <input type="text" v-model="selectRole.userId" placeholder="输入账号" />
      </div>
      <div>
        <label>角色类型</label>
        <input type="text" v-model="selectRole.roleType" />
      </div>
      <div>
        <label>角色等级</label>
        <input type="text" v-model="selectRole.level" />
      </div>

      <div class="btngroup">
        <button class="buttonCls" @click="modifyRoleInfo">修改</button>
        <button class="buttonCls" @click="closeRolePanel">取消</button>
      </div>
    </div>
    
  </div>
</template>
<script>
import rightmenu from "../util/rightmenu";
export default {
  name: "roleinfo",
  components: {
    rightmenu
  },
  props: {
    searchRoleSimple: false,
    showRightMenu: false
  },
  data() {
    return {
      roleid: null,
      rolename: null,
      roleaid: null,
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

      menuData: {
        menuName: "roleInfoRightMenu",
        axios: { x: null, y: null }, //菜单位置
        menuList: [
          {
            name: "修改玩家信息", // 菜单项名称
            fnHandler: "modifyRoleInfo", // 菜单项执行函数
            show: true
          },
          {
            name: "玩家禁言", // 菜单项名称
            fnHandler: "slincedRoleInfo", // 菜单项执行函数
            show: true
          },
          {
            name: "玩家解禁言", // 菜单项名称
            fnHandler: "unslincedRoleInfo", // 菜单项执行函数
            show: true //是否显示
          },
          {
            name: "玩家物品操作", // 菜单项名称
            fnHandler: "operateRoleSubject", // 菜单项执行函数
            show: true //是否显示
          }
        ]
      },
      selectRole: {}, //记录右键选中的数据
      showRoleInfoPanel: false, // 显示玩家数据
      showSlincedRoleInfoPanel: false, //显示禁言玩家信息
      searchType: null, //下拉框选择值
      roleInfoPanelTitle: "添加角色信息", //弹出窗标题
      showSlincedTime: false, //显示禁言时间
      lastSlincedTime: 0, // 剩余禁言时间
      showOperateRoleSubjectPanel: false
    };
  },
  methods: {
    searchRoleInfo() {},
    getContentMenu(role, event) {
      event = event || window.event;
      event.preventDefault(); // 阻止默认右键菜单
      var x = event.clientX;
      var y = event.clientY;
      // this.showRightMenu = true;

      let height = this.getViewPortHeight();
      if (height - y <= 100) {
        y = y - 30;
      }
      this.menuData.axios = { x, y };
      this.selectRole = role;
    },
    showModifyRoleInfo() {
      this.roleInfoPanelTitle = "修改玩家信息";
      this.showRoleInfoPanel = true;
      this.showSlincedRoleInfoPanel = false;
      this.$bus.$emit("modal", true);
    },
    showSlincedRoleInfo() {
      this.roleInfoPanelTitle = "玩家禁言";
      this.showSlincedRoleInfoPanel = true;
      this.showRoleInfoPanel = false;
      this.showSlincedTime = true;
      this.$bus.$emit("modal", true);
    },
    showUnslincedRoleInfo() {
      this.roleInfoPanelTitle = "玩家解禁言";
      this.showSlincedRoleInfoPanel = true;
      this.showRoleInfoPanel = false;
      this.showSlincedTime = false;
      this.$bus.$emit("modal", true);
    },
    closeRolePanel() {
      this.showRoleInfoPanel = false;
      this.showSlincedRoleInfoPanel = false;
      this.$bus.$emit("modal", false);
    },
    modifyRoleInfo() {
      this.$bus.$emit("roleinfo:modifyroleinfo", this.selectRole);
      this.$bus.$emit("modal", false);
    },
    slincedRoleInfo() {
      this.$bus.$emit("roleinfo:slincedroleinfo", this.selectRole);
      this.showSlincedRoleInfoPanel = false;
      // var request = this.createCORSRequest(
      //   "get",
      //   "http://localhost:8080/GMServer"
      // );
      // if (request) {
      //   request.onload = function() {
      //     //对request.responseText进行处理
      //     console.log("request: ", request);
      //   };
      //   request.send(null);
      // }

      this.$bus.$emit("modal", false);
    },
    createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      // xhr.Origin = "http://localhost:9999/gmServer";
      if ("withCredentials" in xhr) {
        // xhr.withCredentials = true;
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != undefined) {
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        xhr = null;
      }
      return xhr;
    },

    unslincedRoleInfo() {
      alert("unslinced role info");
      this.$bus.$emit("modal", false);
    },
    getViewPortHeight() {
      if (document.compatMode == "BackCompat") {
        return document.body.clientHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    },
    showOperateRoleSubjectPanel() {},
    operateRoleSubject() {}
  }
};
</script>

<style>
#roleInfo {
  height: 100%;
}

#roleInfo h3 {
  background-color: rgba(32, 160, 255, 0.1);
  border-color: rgba(32, 160, 255, 0.2);
  color: #20a0ff;
  padding: 10px 5px;
}

#roleInfo .searchArea {
  position: relative;
}
#roleInfo .searchArea .searchArea-content {
  margin-top: 20px;
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
  background: #f7ba2a;
  color: #fff;
  font-weight: bold;
  outline: none;
  border: none;
  padding: 0px 20px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
}

#roleInfo .searchArea .btn:hover {
  background: #f3c14d;
}

#roleInfo .rolelist-content {
  position: relative;
  margin-top: 15px;
}

#roleInfo .rolelist-content table {
  border-collapse: collapse;
  width: 100%;
  height: 100%;
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
  background-color: #f3f3f3;
}

/*滚动条颜色*/
#roleInfo tbody::-webkit-scrollbar-thumb:hover {
  background-color: #ddd;
}

#roleInfo .thcls {
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
}

#roleInfo .tdcls {
  border-bottom: 1px dotted #ddd;
  text-align: center;
  padding: 10px 0px;
}

#roleInfo .roleInfoPanel {
  position: absolute;
  z-index: 999;
  top: 30%;
  left: 40%;
  background: #fff;
  width: 350px;
  height: 280px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

#roleInfo .roleInfoPanel .head {
  margin-bottom: 10px;
}

#roleInfo .roleInfoPanel h4 {
  color: #1e7dd7;
  display: inline-block;
  margin: 5px 5px 0px 0px;
}

#roleInfo .roleInfoPanel .close-icon {
  display: inline-block;
  cursor: pointer;
  float: right;
  margin: 5px 5px 0px 0px;
  color: #1e7dd7;
}

#roleInfo .roleInfoPanel div {
  overflow: hidden;
  margin: 5px 0px 5px 5px;
}

#roleInfo .roleInfoPanel div label {
  display: inline-block;
  width: 80px;
  text-align: right;
  margin-right: 2px;
}

#roleInfo .roleInfoPanel input {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  outline: none;
  width: 170px;
  border-radius: 5px;
  padding-left: 2px;
  border: 1px solid #ddd;
}

#roleInfo .roleInfoPanel .btngroup {
  text-align: center;
  margin-top: 10px;
}

#roleInfo .roleInfoPanel .btngroup .buttonCls {
  background: #1e7dd7;
  outline: none;
  border: none;
  height: 30px;
  line-height: 30px;
  color: #fff;
  border-radius: 5px;
  padding: 2px 10px;
}

#roleInfo .roleInfoPanel .btngroup .buttonCls:hover {
  background: #20a0ff;
}
</style>
