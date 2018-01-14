<template>
    <div id="serverlistpanel">
        <serverlist :showSearchArea="showSearchArea" :showOpeArea="showOpeArea" :showButton="showButton"></serverlist>
    </div>
</template>
<script>
import serverlist from "./serverlist";
export default {
  components: { serverlist },
  data() {
    return {
      showSearchArea: true,
      showOpeArea: true,
      showButton: true
    };
  }
};
</script>
<style>
#serverlistpanel {
  height: 100%;
}
</style>


