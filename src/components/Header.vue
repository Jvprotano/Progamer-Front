<template>
    <div id="menu">
 <nav id="menu-h">
        <ul>
            <li><router-link id="paginaHome" to="/">Home</router-link></li>

            <li><input type="text" id="pesquisa" placeholder="Faça sua pesquisa"><button>Pesquisar</button></li>
            
            <li><router-link to="/">Sobre</router-link></li>

            <li><router-link to="/cadastrar">Cadastre-se</router-link></li>

            <li><router-link to="/">Quem somos</router-link></li>

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