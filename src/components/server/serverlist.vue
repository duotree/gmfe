<template>
  <div id="serverlist">
    <div class="searchArea" v-show="isShowSearchArea">
      <fieldset>
        <legend>服务器查询</legend>
        <label>服务器ID:</label>
        <input type="text" placeholder="服务器ID" />
        <button class="searchBtn">查询</button>
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
            <th class="thCls"><input type="radio" v-show="showHeadRadio" name="headradio" /></th>
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
            <td class="tdCls"><input type="radio" name="headradio" value="server.id" /></td>
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
            <td :colspan="colspanNum">
            </td>
            <td class="ftdCls">
              <button class="buttonCls" v-on:click="showAddServer()">添加 </button>
              <button class="buttonCls" v-on:click="showmodifyServer()">修改 </button>
              <button class="buttonCls" v-on:click="deleteServer()">删除</button>
            </td>
          </tr>
        </tfoot>
      </table>
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
      colspanNum: 9, // 需要合并的列数
      showButton: true, // 是否显示增删改操作按钮
      isShowSearchArea: true, // 是否展现查询框区域
      isShowOpeArea: false //是否展现全局操作按钮
    };
  },
  methods: {
    deleteServer(serverid) {},
    saveServer(serverid) {},
    showAddServer(serverid) {},
    showmodifyServer(serverid) {},
    findServerById(serverid) {},
    modifyAdVersion() {},
    modifyIosVersion() {},
    manageQA() {}
  }
};
</script>
 
<style>
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

#serverlist .serverlist-content {
  margin-top: 20px;
}

#serverlist table {
  border-collapse: collapse;
  width: 100%;
}

#serverlist .thCls {
  border-bottom: 2px solid #ddd;
}

#serverlist .tdCls {
  border-bottom: 1px dotted #ddd;
  padding: 10px;
  text-align: center;
}

#serverlist .ftdCls {
  text-align: center;
}

#serverlist .buttonCls {
  padding: 5px 10px;
  margin-top: 10px;
}
</style>
