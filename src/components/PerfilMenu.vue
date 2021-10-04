<template>
<div id="home-i">
    <div class="container">
        <b-container class="bv-example-row">
            <b-row>
                <div>
                    <b-card-header header-tag="nav">
                        <b-nav card-header tabs>
                            <b-col sm="4"><b-nav-item active to="/courseInstructor">Cursos instruidos</b-nav-item></b-col>
                            <b-col sm="4"><b-nav-item active to="/historyFinancial">Histórico financeiro</b-nav-item></b-col>
                            <b-col sm="4"><b-nav-item active to="/mySales">Minhas vendas</b-nav-item></b-col>
                        </b-nav>
                    </b-card-header>
                </div>    
            </b-row>
        </b-container>
    </div>
</div>
</template>

<script>
export default {
    name: "PerfilMenu",
}
</script>

<style scoped>
.bv-example-row{
    margin-right: 100%;
}
.container{
    padding-right: var(--bs-gutter-x, 0.0rem) !important; 
    padding-left: var(--bs-gutter-x, 0.0rem) !important;
}
.router-link-exact-active:focus, .router-link-exact-active:read-only{
    background-color: #8351dc !important;
    color: white !important;
}

</style>