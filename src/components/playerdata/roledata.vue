<template>
  <div id="roledata">
    <div class="serverinfo">
      <serverinfo :showSearchArea="true" :showOpeArea="true" :showTableRadio="true"></serverinfo>
    </div>
    <div class="roleinfo">
      <roleinfo></roleinfo>
    </div>
  </div>
</template>
<script>
import roleinfo from "../role/roleinfo";
import serverinfo from "../server/serverlist";

export default {
  components: {
    roleinfo,
    serverinfo
  },
  mounted() {
    this.$bus.$on("serverlist:getServer", this.getServer);
    this.$bus.$on("roleinfo:modifyroleinfo", this.getSelectRole);
    this.$bus.$on("roleinfo:slincedroleinfo", this.slincedRoleInfo);
  },
  data() {
    return {
      server: {},
      role: {}
    };
  },
  methods: {
    getServer(server) {
      this.server = server;
    },
    getSelectRole(role) {
      alert("role");
      this.role = role;
    },
    slincedRoleInfo(role) {
      if (this.server.id == null || this.server.id == "") {
        alert("请选择服务器");
      }
      console.log("this.role: ", role, "this.server: ", this.server);
    }
  }
};
</script>

<style>
#roledata {
  height: 100%;
}

#roledata .serverinfo {
  height: 60%;
}

#roledata .roleinfo {
  height: 40%;
  margin-top: 25px;
}
</style>


