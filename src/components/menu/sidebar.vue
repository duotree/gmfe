<template>
    <div id="sidebar">
        <ul>
            <li  v-for="pmenu in pmenus" class="pmenu"> 
                <a href="#" class="pa"> {{ pmenu.title  }} </a>
                <ul >
                    <li class="submenu" v-for="item in pmenu.subList">
                        <router-link :to="'/gmServer/helloworld'" class="suba">{{ item.title }} </router-link>
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

    #sidebar .pmenu .pa{
        color: #fff;
        background: #540303;
        width: 100%;
        height: 30px;
        display: inline-block;
        padding: 5px 0px 5px 10px;
        box-sizing: border-box;
    }

    #sidebar .submenu {
        color: #fff;
        background: #300d0d;
        padding: 15px;
        box-sizing: border-box;
    }

    #sidebar .submenu .suba{
       background: #300d0d;
       width: 100%;

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



