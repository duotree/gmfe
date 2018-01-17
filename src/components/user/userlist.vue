<template>
  <div id="userlist">
    <div class="userlist-content">
      <table>
        <thead>
          <tr>
            <th class="thRadioCls" v-show="showTableRadio"><input type="radio" name="headradio" v-show="showHeader()" /></th>
            <th v-show="isShow"></th>
            <th class="thCls">用户名</th>
            <th class="thCls">密码</th>
            <th class="thCls">所属权限</th>
            <th class="thCls">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users">
            <td class="tdRadioCls" v-show="showTableRadio"><input type="radio" name="headradio" :value="user.id" v-on:click.stop="getUser(user)" /></td>
            <td class="tdCls" v-show="isShow"> {{ user.id }} </td>
            <td class="tdCls" :title="user.name"> {{ user.name }} </td>
            <td class="tdCls" :title="user.password"> {{ user.password }} </td>
            <td class="tdCls" :title="user.pri"> {{ transPri(user.pri) }}</td>
            <td class="tdCls">
              <a href="#" v-on:click.stop="deleteUser(user.id)" title="删除"><img src="../../assets/img/delete.png" /></a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="tdCls" v-show="isShow"> </td>
            <td :colspan="colspanNum" class="ftdCls">
              <button class="buttonCls" v-on:click="showAddUser()">添加</button>
              <button class="buttonCls" v-on:click="showModifyUser()">修改</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="addUserPanel" v-show="showUserPanel">
      <h4>{{ userTitle }}</h4>
      <span class="close-icon">
        <i class="fa fa-times" aria-hidden="true" @click="closeAddUserPanel"></i>
      </span>
      <form @submit.prevent="submitData">
        <div>
          <label>用户名：</label>
          <input type="text" v-model="user.name" placeholder="用户名" />
        </div>
        <div>
          <label>密码：</label>
          <input type="password" v-model="user.password" placeholder="密码" />
        </div>
        <div>
          <label>所属权限： </label>
          <select v-model="user.pri">
            <option v-for="pri in pris" :value="pri.id"> {{ pri.name }}</option>
          </select>
        </div>
        <div class="btngroup">
          <button class="buttonCls btngroup-color-blue" v-show="!showModifyBtn">添加</button>
          <button class="buttonCls btngroup-color-blue" v-show="showModifyBtn">修改</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "userlist",
  data() {
    return {
      isShow: false, //是否显示用户id
      users: [
        { id: 1, name: "root", password: "root", pri: 1 },
        { id: 2, name: "manager", password: "manager", pri: 2 },
        { id: 3, name: "cehua", password: "cehua", pri: 2 },
        { id: 4, name: "client", password: "client", pri: 3 },
        { id: 8, name: "test1", password: "test1", pri: 2 },
        { id: 11, name: "abc123", password: "abc123", pri: 1 },
        { id: 12, name: "123acv", password: "123acv", pri: 1 },
        { id: 14, name: "12ab", password: "12#$", pri: 1 },
        { id: 15, name: "test1", password: "test", pri: 3 }
      ],
      pris: [
        { id: 1, name: "root权限" },
        { id: 2, name: "管理员权限" },
        { id: 3, name: "client权限" }
      ],
      colspanNum: 3, // 需要合并的列数
      userTitle: "添加用户", // 弹出框标题
      showUserPanel: false, // 弹出框
      user: {
        id: 0,
        name: "",
        password: "",
        pri: 1
      },
      showModifyBtn: false, //展现用户修改确认按钮
      showHeadRadio: false, // 是否展现列选择框
      showTableRadio: true // 是否展现列选择框
    };
  },
  methods: {
    deleteUser(userid) {
      alert("delete: " + userid);
    },
    saveUser(userid) {
      alert("save: " + userid);
    },
    showAddUser() {
      this.userTitle = "添加用户";
      this.showModifyBtn = false;
      this.user = {};
      this.showUserPanel = true;
      this.$bus.$emit("modal", true); // 弹出窗体的时候显示遮罩层
    },
    showModifyUser() {
      this.userTitle = "修改用户";
      this.showModifyBtn = true;
      this.showUserPanel = true;
      this.$bus.$emit("modal", true);
      //todo  获取选中用户数据
    },
    submitData() {
      if (!this.showModifyBtn === true) {
        this.users.push(this.user);
      }
      this.showUserPanel = false; //关闭弹出框
      this.$bus.$emit("modal", false); // 关闭弹出窗体遮罩层
    },
    closeAddUserPanel() {
      this.showUserPanel = false;
      this.$bus.$emit("modal", false); // 关闭窗体的时候隐藏遮罩层
    },
    transPri(pri) {
      let len = this.pris.length;
      for (let i = 0; i < len; i++) {
        let item = this.pris[i];
        if (item.id === pri) {
          return item.name;
        }
      }
    },
    showHeader() {
      console.log("&操作: ", this.showHeadRadio && this.showTableRadio);
      return this.showHeadRadio && this.showTableRadio;
    },
    getUser(user) {
      this.user = user;
    }
  }
};
</script>

<style>
#userlist {
  width: 100%;
  height: 100%;
}

#userlist .userlist-content {
  height: 70%;
}

#userlist table {
  border-collapse: collapse;
  width: 100%;
  height: 100%;
}

#userlist tbody {
  display: block;
  height: calc(100% - 54px);
  overflow-y: auto;
}

table thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

#userlist tbody::-webkit-scrollbar {
  width: 10px;
}

/*滚动条背景*/
#userlist tbody::-webkit-scrollbar-track {
  background: none;
}

/*滚动条颜色*/
#userlist tbody::-webkit-scrollbar-thumb {
  background-color: #f3f3f3;
}

/*滚动条颜色*/
#userlist tbody::-webkit-scrollbar-thumb:hover {
  background-color: #ddd;
}
#userlist .tdCls {
  border-bottom: 1px dotted #ddd;
  padding: 10px;
  text-align: center;
  /* word-wrap: break-word; */
}

#userlist .tdRadioCls {
  border-bottom: 1px dotted #ddd;
  text-align: center;
  width: 10px;
}

#userlist .thCls {
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
}

#userlist .thRadioCls {
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  width: 10px;
}

#userlist .ftdCls {
  text-align: right;
}

#userlist .buttonCls {
  margin-top: 5px;
  padding: 5px 10px;
  background: #f7ba2a;
  color: #fff;
  border: none;
  outline: none; /* outline （轮廓）是绘制于元素周围的一条线,不会占据空间，也不一定是矩形 */
  cursor: pointer;
  border-radius: 5px;
}

#userlist .btngroup-color-blue {
  background: #1e7dd7;
}

#userlist .btngroup-color-blue:hover {
  background: #20a0ff;
}
#userlist .addUserPanel {
  width: 500px;
  border: 1px solid #eee;
  position: absolute;
  z-index: 999;
  top: 30%;
  left: 35%;
  background: #fff;
}

#userlist .addUserPanel h4 {
  margin: 0;
  padding: 5px;
  color: #1e7dd7;
  display: inline-block;
}

#userlist .close-icon {
  margin-right: 20px;
  margin-top: 5px;
  float: right;
}

#userlist .close-icon i {
  color: #1e7dd7;
}

#userlist .addUserPanel input,
#userlist .addUserPanel select {
  height: 30px;
  line-height: 30px;
  width: 240px;
  margin-top: 10px;
  border: 1px solid #ddd;
  padding-left: 5px;
}

#userlist .addUserPanel select {
  box-sizing: content-box;
  padding: 1px;
}

#userlist .addUserPanel label {
  display: inline-block;
  width: 120px;
  text-align: right;
}

#userlist .btngroup {
  margin: 10px 0;
  padding-left: 160px;
}
</style>
