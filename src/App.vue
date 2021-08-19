<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'


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

#formulario {
  background-color: #fff;
  margin: 0;
  text-align: center;
}
#menu-h{
  background-color:#533784;
}
#menu-h ul {
    list-style: none;
    padding: 0;
    margin-block: 0;
}
#menu-h ul li {
    display: inline;

}
#menu-h ul li a {
    color: #FFF;
    padding: 25px;
    display: inline-block;
    text-decoration: none;
    transition: background .5s;
}
#menu-h ul li a:hover {
    background-color: #0F0C1D;

}
#menu-h ul li:last-child a {
    float: right;
    background-color: #6a5ca1;
}
#pesquisa{
    padding: 0 15px;
    border: 10px;
    border-radius: 3px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 16px;

}
#paginaHome{
    float: left;
}

</style>
