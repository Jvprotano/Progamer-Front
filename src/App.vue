<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header';



export default {
  name: 'App',
  components:{
    Header,
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
