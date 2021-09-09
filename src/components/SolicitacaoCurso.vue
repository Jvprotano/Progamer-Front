<template>
<div id="solic-i">
    <div id="fundo-preto"></div>
    <div id="fundo-branco"></div>
    <div id="fundo-roxo"></div>
    <strong><h1>Olá alunos!</h1></strong>
    <br>
    <br>
    <h1>Para acessar essa tela,<br>
    é necessário ser um...</h1>
    <br>
    <b-button id="teste" 
    style="
        font-size: 30px !important;
        color: white; 
        background-color: #533784; 
        border: black;
        border-width: 0px;
        border-radius: 100px;
        border-style: solid;">
        INSTRUTOR</b-button>
    <b-popover target="teste" triggers="hover" placement="down">
        <template v-slot:title>O que se ganha com isso?</template>
        <ul>
            <li>TESTE1</li>
            <li>TESTE2</li>
            <li>TESTE3</li>
        </ul>
    </b-popover>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>Clique no botão abaixo para<br>
     iniciar essa nova jorganda!!</h1>
    <br>
    <br>
    <br>
    <br>
    <li><a href="#">
            <b-button id="cursoInstrutor" 
                variant="light" 
                size="lg" 
                style="
                    font-size: 40px !important;
                    margin-top: -10px; 
                    border: 5px solid rgb(0,0,0)
                    border: black;
                    border-width: 0px;
                    border-radius: 100px;
                    border-style: solid;">
                Cursos Instruidos
            </b-button>
        </a>
    </li>
</div>
</template>

<script>
export default {
    name: 'SolicitacaoCurso'
}
</script>

<style>
#solic-i h1 {
    color: white;
}
#fundo-preto {
    width: 1289px;
    height: 1209px;
    background-color: rgb(0 0 0);
    margin-top: -8px;
    margin-left: -3px;
    border-radius: 30px;

}
#fundo-branco {
    width: 1252px;
    height: 1170px;
    background-color: white;
    margin-top: -1190px;
    margin-left: 15px;
    border-radius: 50px;
}
#solic-i strong h1{
    margin-top: -780px;
    text-align: center; 
    font-size: 80px;
    color: white;
}
#fundo-roxo{
    width: 626px;
    height: 800px;
    background-color: #533784;
    margin-left: 313px;
    margin-top: -1100px;
    border: black;
    border-width: 10px;
    border-radius: 100px;
    border-style: solid;
}
</style>