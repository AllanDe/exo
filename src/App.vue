<template>
  <div id="app">
    <navBar />
    <router-view id="main" />
  </div>
</template>
<script>
import navBar from '@/components/NavBar.vue'
export default {
  components: {
    navBar: navBar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main {
  position: relative;
  top: 50px;
}

#main > button{
  border: 1px solid #563d7c;
  border-radius: 10px;
  background: #563d7c;
  color: white;
  cursor:pointer;
  width: 100%;
  padding: 10px 25px;
}

#main > button:hover{
  border-color: #563d7c;
  background: white;
  color: #563d7c;
}

#main > input{
  width: 100%;
  border: 1px solid #563d7c;
  border-radius: 5px;
  padding: 10px 10px;
}
</style>
