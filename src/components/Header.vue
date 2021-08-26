<template>
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

            <li><a href="#" id="botLogin">Entrar</a></li>
        </ul>
    </nav>
    </div>
</template>

<script>
export default {
    name: 'Menu',
}
</script>

<style scoped>
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
    font-family: OpenSans,;
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
input{
    flex:1;
}
</style>