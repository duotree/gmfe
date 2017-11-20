<template>
    <div id="sidebar">
        <ul v-for="pmenu in pmenus">
            <li v-for = "item in pmenu.items"> 
                <router-link :to="item"> {{item}} </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data (){
        return {
            pmenus:[{items:['/helloworld','item2']},{ items:['item3']}],
        }
    }
}
</script>

<style>
    #sidebar {
        margin: 0;
    }

    #sidebar ul {
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

    }

    ul li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>



