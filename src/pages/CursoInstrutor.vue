<template>
    <div id="curso-instruido">
        <div class="container">
            <b-card title="Card Title" no-body>
                <PerfilMenu/>
                <b-card-body class="text-center">
                    <b-card-text><b-row><b-col sm="12">Desculpe, tela vazia! (CURSO INSTRUTOR)</b-col></b-row></b-card-text>
                    <b-card-text><b-row><b-col sm="12"><SolicitacaoModal/></b-col></b-row></b-card-text>
                </b-card-body>
            </b-card>
        </div>
    </div>
</template>

<script>
import PerfilMenu from "../components/PerfilMenu"
import SolicitacaoModal from "../components/SolicitacaoModal"
export default {
    name: "CursoInstrutor",
    components: {
        PerfilMenu,
        SolicitacaoModal,
    },
};
</script>

<style scoped>

</style>

