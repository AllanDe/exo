<template>
    <nav class="nav">
        <img src="@/assets/logo.png"/>
        <router-link v-for="lien in liens" :key="lien.path" :to="lien.path">{{lien.name}}</router-link>
    </nav>
</template>
<script>
export default {
    data:function (){
        return {
        }
    },
    computed:{
        liens:function(){
            console.log(this.$router.options.routes.filter(route=>route.main == true))
            return this.$router.options.routes.filter(route=>route.main == true)
        }
    }
}
</script>
<style>
.nav{
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    position: fixed;
    top:0;
    background: #563d7c;
    text-align: left;
}

.nav > a {
    text-decoration: none;
    color: white;
    margin: 0px 5px;
}

.nav > a:hover {
    color: white;
    font-weight: bold;
}

.nav > img{
    height: 30px;
    margin:  0px 15px  0px 30px;
}
</style>