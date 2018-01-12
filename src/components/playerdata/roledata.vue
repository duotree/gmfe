<template>
    <div id="roledata">
        <div class="serverinfo">
            <serverinfo :showSearchArea="true"></serverinfo>
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
  data() {
    return {};
  }
};
</script>

<style>
#roledata {
  height: 100%;
}

#roledata .serverinfo {
  height: 50%;
}

#roledata .roleinfo {
  height: 50%;
}
</style>


