<template>
  <div class="header">
    <Header />
    <div id="curso-instruido">
      <div class="container">
        <b-card title="Card Title" no-body>
          <PerfilMenu />
          <b-card-body class="text">
            <b-card-text><ListaCursoInstrutor /></b-card-text>
            <b-card-text
              ><b-row
                ><b-col sm="12"><SolicitacaoModal /></b-col></b-row
            ></b-card-text>
          </b-card-body>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import PerfilMenu from "../components/PerfilMenu";
import SolicitacaoModal from "../components/SolicitacaoModal";
import ListaCursoInstrutor from "../components/ListaCursoInstrutor";
export default {
  name: "CursoInstrutor",
  components: {
    Header,
    PerfilMenu,
    SolicitacaoModal,
    ListaCursoInstrutor,
  },
};
</script>

<style scoped></style>
