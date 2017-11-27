<template>
    <div id="sidebar">
        <ul>
            <li  v-for="pmenu in pmenus" class="pmenu"> 
                <a href="#" class="pa" v-on:click.stop="showorhide(pmenu.id)"> {{ pmenu.title  }} </a>
                <ul v-bind:class="{'showMenu': choose_menu_id == pmenu.id, 'hideMenu': choose_menu_id != pmenu.id }">
                    <li class="submenu" v-for="item in pmenu.subList" v-bind:class="{'active': choose_submenu_id == item.id}">
                        <a href="#" class="suba" v-on:click.stop="showPage(item.id)">{{ item.title }} </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'sidebar',
    data (){
        return {
            pmenus:[
                {id:1,subList:[{id:101,title:"\u7528\u6237\u7BA1\u7406"}],title:"\u767B\u5F55\u7BA1\u7406"},
                {id:2,subList:[
                    {id:201,title:"\u53D1\u9001\u90AE\u4EF6"},
                    {id:202,title:"\u53D1\u9001\u5168\u5C40\u90AE\u4EF6"},
                    {id:203,title:"\u90AE\u4EF6\u67E5\u8BE2"},
                    {id:204,title:"\u516C\u544A\u63A8\u9001"},
                    {id:205,title:"\u9ED1\u767D\u540D\u5355"},
                    {id:206,title:"\u6E38\u620F\u516C\u544A"}
                    ],title:"补偿/公告"
                }
            ],
            choose_menu_id:0, // 记录选中父菜单的id
            choose_submenu_id: 0,// 选中子菜单id
        }
    },
    methods:{
        showorhide (id) {
           this.choose_menu_id = id;
        },
        showPage (subid) {
            this.choose_submenu_id = subid;
            // 根据subid 填入对应链接地址,暂时统一写一个
            this.$router.push('/gmServer/helloworld');
        }
    }
}
</script>

<style>
    #sidebar {
        margin: 0;
    }

    #sidebar ul li{
        width: 100%;
    }

    #sidebar a {
        text-decoration: none;
    }

    #sidebar .pmenu .pa{
        color: #fff;
        background:#300d0d;
        width: 100%;
        height: 30px;
        display: inline-block;
        padding: 5px 0px 5px 10px;
        box-sizing: border-box;
    }

    #sidebar .submenu {
        color: #fff;
        background:  #540303;
        padding: 5px 20px;
        box-sizing: border-box;
    }

    #sidebar .submenu .suba{
       color: #fff;
    }

    #sidebar .active{
        background: red;
    }

    #sidebar .hideMenu {
        display: none;

    }
    #sidebar .showMenu {
        display: block;
    }

    /* #sidebar ul {
        background: #b30707;
        color:#473232;
        font-weight: bold;
        font-size: 1.2rem;
    }

    #sidebar ul li {
        background: #781d1d;
        color: #000;
        font-weight: bold;
        font-size: 1rem;

    } */

    ul, ul li  {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>



