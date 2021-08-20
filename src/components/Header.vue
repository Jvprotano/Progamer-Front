<template>
<<<<<<< Updated upstream
    <div id="menu">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu Horizontal</title>
    <link rel="stylesheet" href="css/style.css">
</head>
 <nav id="menu-h">
        <ul>
            <li><a href="#" id="paginaHome">Home</a></li>

            <li><input type="text" id="pesquisa" placeholder="Pesquisar"></li>

            <li><a href="#">Sobre</a></li>

            <li><a href="#">Quem Somos</a></li>

            <li><a href="#">Contato</a></li>
=======
  <div id="menu">
    <nav id="menu-h">
      <ul>
        <li><router-link id="paginaHome" to="/">Home</router-link></li>

        <li>
          <input
            type="text"
            id="pesquisa"
            placeholder="Faça sua pesquisa"
          /><button>Pesquisar</button>
        </li>

        <li><router-link to="/">Sobre</router-link></li>

        <li><router-link to="/cadastrar">Cadastre-se</router-link></li>
>>>>>>> Stashed changes

        <li><router-link to="/">Quem somos</router-link></li>

        <li><a href="#" id="botLogin">Entrar</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style >
#formulario {
  background-color: #fff;
  margin: 0;
  text-align: center;
}
<<<<<<< Updated upstream
#menu-h{
    background-color:#533784;
}
#menu-h ul {
    list-style: none;
    padding: 0;
=======
#menu-h {
  background-color: #533784;
}
#menu-h ul {
  list-style: none;
  padding: 0;
  margin-block: 0;
>>>>>>> Stashed changes
}
#menu-h ul li {
  display: inline;
}
#menu-h ul li a {
<<<<<<< Updated upstream
    color: #FFF;
    padding: 25px;
    display: inline-block;
    text-decoration: none;
    transition: background .5s;
    font-family: OpenSans,;
=======
  color: #fff;
  padding: 25px;
  display: inline-block;
  text-decoration: none;
  transition: background 0.5s;
>>>>>>> Stashed changes
}
#menu-h ul li a:hover {
  background-color: #0f0c1d;
  
}
#menu-h ul li:last-child a {
  float: right;
  background-color: #6a5ca1;
}
#pesquisa {
  padding: 0 15px;
  border: 10px;
  border-radius: 3px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
}
#paginaHome {
  float: left;
}
<<<<<<< Updated upstream
input{
    flex:1;
}
</style>
=======
</style>
>>>>>>> Stashed changes
