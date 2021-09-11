<template>
    <div id="curso-instruido">
        <div class="container">
            <b-card title="Card Title" no-body>
                <PerfilMenu/>
                <b-card-body class="text-center"><b-card-text>Estou nos cursos instruidos</b-card-text></b-card-body>
            </b-card>
        </div>
    </div>
</template>

<script>
import PerfilMenu from "../components/PerfilMenu"
export default {
    name: "CursoInstrutor",
    components: {
        PerfilMenu,
    },
};
</script>

<style scoped>

</style>

