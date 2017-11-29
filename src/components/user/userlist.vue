<template>
  <div id="userlist">
      <table>
          <thead>
              <tr>
                  <th v-show="isShow">id</th>
                  <th class="thCls">用户名</th>
                  <th class="thCls">密码</th>
                  <th class="thCls">所属权限</th>
                  <th class="thCls">操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="user in users">
                  <td class="tdCls" v-show="isShow"> {{ user.id }} </td>
                  <td class="tdCls"> {{ user.name }} </td>
                  <td class="tdCls"> {{ user.password }} </td>
                  <td class="tdCls"> {{ user.pri }} </td>
                  <td class="tdCls">
                      <a href="#"  v-on:click.stop="deleteUser(user.id)" title="删除"><img src="../../assets/img/delete.png"/></a>
                      <a href="#" v-on:click.stop="saveUser(user.id)" title="保存"><img src="../../assets/img/saveyes.gif"/></a>
                  </td>
              </tr>
          </tbody>
          <tfoot>
              <tr>
                  <td :colspan="totalCol" class="ftdCls">
                      <button class="buttonCls" v-on:click="showAddUser()">添加</button>
                  </td>
              </tr>
          </tfoot>
      </table>

      <div class="addUserPanel">
          <form action="" method="post">
              <div>

              </div>
              <ul>
                  <li>
                      <label>用户名：</label>
                      <input type="text" name="name" placeholder="用户名" />
                  </li>
                  <li>
                      <label>密码：</label>
                      <input type="password" name="password" placeholder="密码" />
                  </li>
                  <li>
                      <label>所属权限: </label>
                      <select  name="pri" >
                          <option v-for="pri in pris" value="pri" > {{ pri }}</option>
                      </select>
                  </li>
              </ul>
          </form>
      </div>
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
            ],
            pris:['root','admin','client'],
            totalCol: 5
        }
    },
    methods:{
        deleteUser (userid){
            alert("delete: " + userid);
        },
        saveUser (userid){
            alert("save: " + userid);
        },
        showAddUser() {
            alert("show add user panel ");
        }
    }
}

</script>

<style>

    #userlist table {
        border-collapse:collapse;
    }

    .tdCls {
        border-bottom: 1px dotted #ddd;
        padding: 10px;
        text-align: center;
    }

    .thCls {
        border-bottom: 2px solid #ddd;
        padding: 10px;
    }

    .ftdCls {
        text-align: right;    
    }

    .buttonCls {
        margin-top: 5px;
        padding: 5px 10px;
        background: #984377;
        color: #fff;
        border: none;
        outline: none; /* outline （轮廓）是绘制于元素周围的一条线,不会占据空间，也不一定是矩形 */
        cursor: pointer;
    }


</style>
