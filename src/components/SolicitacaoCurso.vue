<template>
<div id="solic-i">
    <div id="fundo-preto"></div>
    <div id="fundo-branco"></div>
    <div id="fundo-roxo"></div>
    <strong><h1>Olá alunos!</h1></strong>
    <h1>OOPA!</h1>

    <b-button id="teste">INSTRUTOR</b-button>
    <b-popover target="teste" triggers="hover" placement="down">
        <template v-slot:title>O que se ganha com isso?</template>
        <ul>
            <li>TESTE1</li>
            <li>TESTE2</li>
            <li>TESTE3</li>
        </ul>
    </b-popover>

</div>
</template>

<script>
export default {
    name: 'SolicitacaoCurso'
}
</script>

<style>
#solic-i h1 {
    color: black;
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
    margin-top: -970px;
    text-align: center; 
    font-size: 80px;
    color: white;
}
#fundo-roxo{
    width: 626px;
    height: 1000px;
    background-color: #533784;
    margin-left: 313px;
    margin-top: -1100px;
    border: black;
    border-width: 10px;
    border-radius: 100px;
    border-style: solid;
}
</style>