<template>
    <div id="login" v-bind:style="{width:width + 'px', height:height + 'px'}">
      <div class="bg-blur" >
      </div>
      <div class="login-content">
          <h1>魂之轨迹GM系统</h1>
          <router-link to="/gmServer">to main</router-link>
          <form action="">
              <div class="login-form-content">
                  <input type="text" name ="username" placeholder="输入用户名"/>
              </div>
              <div class="login-form-content">
                  <input type="password" name="password" placeholder="密码"/>
              </div>
              <div class="login-form-button">
                  <input type="submit" name="登录">
              </div>
          </form>
      </div>
    </div>
    
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
  },
  mounted() {
    window.addEventListener("resize", this.windowResize, true);
  },
  methods: {
    windowResize() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
    }
  }
};
</script>

<style>
#login {
  position: relative;
}

#login .bg-blur {
    background: #eee url(../../assets/img/loginback.jpg) repeat fixed top;
    float: left;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
}

#login .login-content {
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#login .login-content h1 {
  color: #eee;
  margin-bottom: 10px;
}

#login .login-content .login-form-content input {
  height: 40px;
  line-height: 40px;
  width: 230px;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 0 10px;
  border: 1px;
}

:focus {
  outline: none;
}

#login .login-content .login-form-button input {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 230px;
  background-color: #337ab7;
  border: none;
  text-align: center;
  color: #eee;
  font-size: 0.9rem;
  font-weight: bold;
}

input {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
</style>


