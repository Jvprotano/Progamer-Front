<template>
  <div class="header">
    <Header />
    <div id="historico-financeiro">
      <div class="container">
        <b-card title="Card Title" no-body>
          <PerfilMenu />
          <b-card-body class="text-center"
            ><b-card-text
              >Desculpe, tela vazia! (HISTORICO FINANCEIRO)</b-card-text
            ></b-card-body
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import PerfilMenu from "../components/PerfilMenu";
export default {
  name: "HistoryFinancial",
  components: {
    PerfilMenu,
    Header,
  },
};
</script>

<style scoped></style>
