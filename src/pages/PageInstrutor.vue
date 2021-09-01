<template>
<div id="home-i">
    <b-container>
        <ul>
            <li><b-button id="cursoInstrutor" variant="light" size="lg" style="margin-top: -10px; border: 5px solid rgb(0,0,0)">Cursos Instruidos</b-button></li>
            <li><b-button id="historicoFinanceiro" variant="light" size="lg" style="margin-top: -10px; border: 5px solid rgb(0,0,0)">Histórico Financeiro</b-button></li>
            <li><b-button id="minhasVendas" variant="light" size="lg" style="margin-top: -10px; border: 5px solid rgb(0,0,0)">Minhas Vendas</b-button></li>
        </ul>
    </b-container>
</div>
</template>

<script>
export default {}
</script>

<style>
#home-i{
    width: 1325px; 
    height: 80px; 
    background-color: rgb(122, 117, 117); 
    margin-top: -16px;
    padding: 20px;
}
#home-i ul li {
    margin-left: 10px;
    margin-right: 10px;
    display: inline;
}
.cursoInstrutor{
    width: 500px; 
    height: 80px; 
    background-color: rgb(0, 0, 0); 
    margin-top: -6px;
    padding: 20px;
}
</style>