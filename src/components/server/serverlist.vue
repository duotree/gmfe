<template>
  <div id="serverlist">
    <div class="searchArea" v-show="isShowSearchArea">
      <fieldset>
        <legend>服务器查询</legend>
        <label>服务器ID:</label>
        <input type="text" placeholder="服务器ID" v-model="serverid" />
        <button class="searchBtn" v-on:click="findServerById()">查询</button>
      </fieldset>
    </div>
    <div class="operateArea" v-show="isShowOpeArea">
      <button class="buttonCls" v-on:click="modifyAdVersion()">修改版本号</button>
      <button class="buttonCls" v-on:click="modifyIosVersion()">修改ios版本号</button>
      <button class="buttonCls" v-on:click="manageQA()">管理QA账号</button>
    </div>

    <div class="serverlist-content">
      <table>
        <thead>
          <tr>
            <th class="thCls"><input type="radio" name="headradio" v-show="showHeadRadio" /></th>
            <th class="thCls">服务器ID</th>
            <th class="thCls">大区名字</th>
            <th class="thCls">服务器名称</th>
            <th class="thCls">人数状态</th>
            <th class="thCls">游戏服状态</th>
            <th class="thCls">服务器地址</th>
            <th class="thCls">端口</th>
            <th class="thCls">渠道标识</th>
            <th class="thCls">不可见的渠道标识</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="server in serverlist">
            <td class="tdCls"><input type="radio" name="headradio" v-show="showTableRadio" value="server.id" v-on:click="selectServer(server)" /></td>
            <td class="tdCls" :title="server.id"> {{ server.id }} </td>
            <td class="tdCls" :title="server.regionName"> {{ server.regionName }} </td>
            <td class="tdCls" :title="server.displayName"> {{ server.displayName }} </td>
            <td class="tdCls" :title="server.memStatus"> {{ server.memStatus }} </td>
            <td class="tdCls" :title="server.svrStatus"> {{ server.svrStatus }} </td>
            <td class="tdCls" :title="server.host"> {{ server.host }} </td>
            <td class="tdCls" :title="server.port"> {{ server.port }} </td>
            <td class="tdCls" :title="server.channels"> {{ server.channels }} </td>
            <td class="tdCls" :title="server.exceptChannels"> {{ server.exceptChannels }} </td>
          </tr>
        </tbody>
        <tfoot v-show="showButton">
          <tr>
            <td :colspan="colspanNum" class="ftdCls">
              <button class="buttonCls" v-on:click="showAddServer()">添加 </button>
              <button class="buttonCls" v-on:click="showmodifyServer()">修改 </button>
              <button class="buttonCls" v-on:click="deleteServer()">删除</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="serverPanel" v-show="showServerPanel">
      <h4>{{ serverPanelTitle }}</h4>
      <span class="close-icon">
        <i class="fa fa-times" aria-hidden="true" @click="closeUserPanel"></i>
      </span>
      <form @submit.prevent="submitData">
        <div>
          <label for="">大区名字:</label>
          <input type="text" v-model="server.regionName" placeholder="大区名字" />
        </div>
        <div>
          <label for="">服务器名称:</label>
          <input type="text" v-model="server.displayName" placeholder="服务器名称" />
        </div>
        <div>
          <label for="">人数状态:</label>
          <select v-model="server.memStatus" placeholder="人数状态">
            <option v-for="memStatus in memStatusList" :value="memStatus.value">{{ memStatus.name }}</option>
          </select>
        </div>
        <div>
          <label for="">游戏服状态:</label>
          <select v-model="server.svrStatus" placeholder="游戏服状态">
            <option v-for="svrStatus in svrStatusList" :value="svrStatus.value">{{ svrStatus.name }}</option>
          </select>
        </div>
        <div>
          <label for="">服务器地址:</label>
          <input type="text" v-model="server.host" placeholder="服务器地址" />
        </div>
        <div>
          <label for="">端口:</label>
          <input type="text" v-model="server.port" placeholder="端口" />
        </div>
        <div>
          <label for="">渠道标识:</label>
          <input type="text" v-model="server.channels" placeholder="渠道标识" />
        </div>
        <div>
          <label for="">不可见的渠道标识:</label>
          <input type="text" v-model="server.exceptChannels" placeholder="不可见的渠道标识" />
        </div>
        <div class="btngroup">
          <button class="buttonCls" v-show="!showModifyBtn">添加</button>
          <button class="buttonCls" v-show="showModifyBtn">修改</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: "serverlist",
  data() {
    return {
      serverlist: [
        {
          channels: ["all_ops", "all_review", "ios_ops", "ios_review"],
          displayName: "\u6C5F\u5C71\u7F8E\u4EBA1",
          exceptChannels: ["xiaomi"],
          host: "192.168.1.131",
          id: 1,
          memStatus: 4,
          port: 9000,
          regionName: "\u5B89\u5353\u533A1",
          svrStatus: 0
        },
        {
          channels: ["all_ops", "all_review", "ios_ops", "ios_review"],
          displayName: "\u5F20\u9F992",
          exceptChannels: ["360"],
          host: "192.168.1.222",
          id: 2,
          memStatus: 3,
          port: 9000,
          regionName: "\u5B89\u5353\u533A1",
          svrStatus: 0
        },
        {
          channels: ["all_ops", "all_review", "ios_ops", "ios_review"],
          displayName: "\u6587\u6D9B3",
          exceptChannels: ["360"],
          host: "192.168.1.145",
          id: 3,
          memStatus: 2,
          port: 9000,
          regionName: "\u5B89\u5353\u533A1",
          svrStatus: 0
        },
        {
          channels: ["all_ops", "all_review", "ios_ops", "ios_review"],
          displayName: "\u6D4B\u8BD5\u670D5",
          exceptChannels: ["baidu"],
          host: "106.39.94.118",
          id: 5,
          memStatus: 2,
          port: 9000,
          regionName: "\u5B89\u5353\u533A1",
          svrStatus: 0
        },
        {
          channels: ["all_review", "all_ops", "ios_ops", "ios_review"],
          displayName: "\u674E\u79C0\u5A77",
          exceptChannels: [],
          host: "192.168.1.104",
          id: 6,
          memStatus: 1,
          port: 9000,
          regionName: "\u674E\u79C0\u5A77",
          svrStatus: 1
        },
        {
          channels: ["all_ops", "all_review", "ios_ops", "ios_review"],
          displayName: "WW8",
          exceptChannels: ["360"],
          host: "192.168.1.64",
          id: 8,
          memStatus: 1,
          port: 9000,
          regionName: "\u5B89\u5353\u533A1",
          svrStatus: 0
        },
        {
          channels: ["all_ops", "all_review", "ios_ops", "ios_review"],
          displayName: "\u4E8E\u591A",
          exceptChannels: [],
          host: "192.168.1.252",
          id: 11,
          memStatus: 1,
          port: 9000,
          regionName: "\u5B89\u5353\u533A1",
          svrStatus: 0
        },
        {
          channels: ["all_ops", "all_review", "ios_ops", "ios_review"],
          displayName: "released12",
          exceptChannels: [],
          host: "106.39.94.117",
          id: 12,
          memStatus: 3,
          port: 20890,
          regionName: "released",
          svrStatus: 0
        }
      ],
      showHeadRadio: false, // 是否展现列选择框
      showTableRadio: true, // 是否展现列选择框
      colspanNum: 10, // 需要合并的列数
      showButton: true, // 是否显示增删改操作按钮
      isShowSearchArea: true, // 是否展现查询框区域
      isShowOpeArea: true, //是否展现全局操作按钮
      server: {},
      serverid: null,
      svrStatusList: [],
      memStatusList: [],
      showModifyBtn: false,
      serverPanelTitle: "添加服务器",
      showServerPanel: false // 弹出框
    };
  },
  methods: {
    deleteServer() {
      let serverid = this.server.id;
    },
    showAddServer() {
      this.$bus.$emit("modal", true);
      this.showServerPanel = true;
    },
    showmodifyServer() {
      this.serverPanelTitle = "修改服务器";
      this.showModifyBtn = true;
      this.showServerPanel = true;
      this.$bus.emit("modal", true);
    },
    findServerById(serverid) {},
    modifyAdVersion() {},
    modifyIosVersion() {},
    manageQA() {},
    submitData() {
      if (!this.showModifyBtn && !this.isNull(this.server)) {
        this.serverlist.push(this.server);
        this.$bus.$emit("modal", false);
        this.showServerPanel = false;
      }
      if (this.isNull(this.server)) {
        alert("输入数据不能为空");
      }
    },
    closeUserPanel() {
      this.showServerPanel = false;
      this.$bus.$emit("modal", false);
    },
    isNull(obj) {
      let keys = Object.keys(obj);
      return keys.length == 0;
    },
    selectServer(server) {
      this.server = server;
    }
  }
};
</script>
 
<style>
#serverlist {
  height: 100%;
}

#serverlist .searchArea {
  height: 10%;
}

#serverlist .searchArea fieldset {
  border: 1px solid #ddd;
}

#serverlist .searchArea input {
  height: 30px;
  line-height: 30px;
  width: 240px;
  box-sizing: border-box;
  padding-left: 10px;
  border: 1px solid #ddd;
}

#serverlist button {
  background: #984377;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 5px;
}

#serverlist .searchBtn {
  padding: 0px 20px;
  height: 30px;
  line-height: 30px;
}

#serverlist .operateArea {
  height: 10%;
}

#serverlist .serverlist-content {
  margin-top: 20px;
  height: 70%;
}

#serverlist table {
  border-collapse: collapse;
  width: 100%;
  height: 100%;
}

#serverlist table thead {
  height: 17px;
}

table thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

#serverlist tbody {
  display: block;
  height: calc(100% - 37px); /*todo */
  overflow-y: auto;
}

#serverlist tbody::-webkit-scrollbar {
  width: 10px;
}

/*滚动条背景*/
#serverlist tbody::-webkit-scrollbar-track {
  background: none;
}

/*滚动条颜色*/
#serverlist tbody::-webkit-scrollbar-thumb {
  background-color: #984377;
}

/*滚动条颜色*/
#serverlist tbody::-webkit-scrollbar-thumb:hover {
  background-color: #cd6889;
}

#serverlist .thCls {
  border-bottom: 2px solid #ddd;
}

#serverlist .tdCls {
  border-bottom: 1px dotted #ddd;
  text-align: center;
}

#serverlist .ftdCls {
  text-align: right;
}

#serverlist .buttonCls {
  padding: 5px 10px;
  margin-top: 10px;
  height: 27px;
}

#serverlist .serverPanel {
  width: 700px;
  height: 230px;
  background: #fff;
  position: absolute;
  z-index: 999;
  top: 30%;
  left: 30%;
  border: 1px solid #eee;
}

#serverlist .serverPanel h4 {
  display: inline-block;
  color: #984377;
  margin-top: 5px;
  margin-left: 5px;
}

#serverlist .serverPanel .close-icon {
  display: inline-block;
  color: #984377;
  float: right;
  margin-right: 5px;
  margin-top: 5px;
  cursor: pointer;
}

#serverlist .serverPanel div {
  width: 350px;
  float: left;
}

#serverlist .serverPanel label {
  width: 100px;
  display: inline-block;
  text-align: right;
}

#serverlist .serverPanel input,
#serverlist .serverPanel select {
  padding: 5px 10px;
  width: 200px;
  border: 1px solid #ddd;
  outline: none;
  margin-top: 5px;
}

#serverlist .serverPanel select {
  box-sizing: content-box;
}

#serverlist .serverPanel .btngroup {
  width: 100%;
  text-align: center;
}
</style>
