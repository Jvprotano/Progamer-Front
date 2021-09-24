<template>
  <div class="header">
    <Header3 />
    <div id="minhas-vendas">
      <div class="container">
        <b-card title="Card Title" no-body>
          <PerfilMenu />
          <b-card-body class="text-center"
            ><b-card-text
              >Desculpe, tela vazia! (MINHAS VENDAS)</b-card-text
            ></b-card-body
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Header3 from "../components/Header3";
import PerfilMenu from "../components/PerfilMenu";
export default {
  name: "MinhasVendas",
  components: {
    PerfilMenu,
    Header3,
  },
};
</script>

<style scoped></style>
