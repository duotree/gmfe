<template>
  <div id="userlist">
      <table>
          <thead>
              <tr>
                  <th v-show="isShow">id</th>
                  <th>用户名</th>
                  <th>密码</th>
                  <th>所属权限</th>
                  <th>操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="user in users">
                  <td v-show="isShow"> {{ user.id }} </td>
                  <td> {{ user.name }} </td>
                  <td> {{ user.password }} </td>
                  <td> {{ user.pri }} </td>
                  <td>
                      <a href="#"  v-on:click.stop="deleteUser(user.id)" title="删除"><img src="../../assets/img/delete.png"/></a>
                      <a href="#" v-on:click.stop="saveUser(user.id)" title="保存"><img src="../../assets/img/add.png"/></a></td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    name: 'userlist',
    data (){
        return {
            isShow: false,
            users:[
                {id:1,name:"root",password:"root",pri:1},
                {id:2,name:"manager",password:"manager",pri:2},
                {id:3,name:"cehua",password:"cehua",pri:2},
                {id:4,name:"client",password:"client",pri:3},
                {id:8,name:"test1",password:"test1",pri:2},
                {id:11,name:"abc123",password:"abc123",pri:1},
                {id:12,name:"123acv",password:"123acv",pri:1},
                {id:14,name:"12ab",password:"12#$",pri:1},
                {id:15,name:"test1",password:"test",pri:3}
            ]
        }
    },
    methods:{
        deleteUser (userid){
            alert("delete: " + userid);
        },
        saveUser (userid){
              alert("save: " + userid);
        }
    }
}

</script>

<style>

</style>
