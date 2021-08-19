<template>
  <div id="app">
    <Header/>
    <MenuLateral/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'


export default {
  name: 'App',
  components:{
    Header,
    MenuLateral,
  }
}
</script>

<style>
input{
    flex:1;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}



</style>
