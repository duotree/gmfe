<template>
  <div id="main" v-bind:style="{width:width + 'px', height:height + 'px'}">
      <div class="sidebar">
         <sidebar></sidebar>
      </div>
      <div class="content">
          test
          <router-view></router-view>
      </div>
  </div>
</template>
<script>
import sidebar from './menu/sidebar'

export default {
    name: 'main',
    components: {
        sidebar
    },
    data () {
        return {
            width  : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        }
    },
    mounted() {
        window.addEventListener("resize", this.windowResize, true)

    },
    methods :{
        height() {
            return this.height;
        },
        width(){
            return this.width;
        },
        windowResize (){
            this.width = document.documentElement.clientWidth
            this.height = document.documentElement.clientHeight
        }
    }
}
</script>

<style>
    #main {
        
    }

    #main .sidebar{
        background: green;
        width: 10%;
        float: left;
    }

    #main .content{
        background: yellow;
        width: 90%;
        float: left;
    }
</style>


